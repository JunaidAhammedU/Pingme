import { useEffect, useRef, useState } from "react";
import { BsMicFill } from "react-icons/bs";
import { motion } from "framer-motion";

interface VoiceRecorderProps {
  isRecording: boolean;
  onStop: (audioBlob: Blob) => void;
  onToggle: () => void;
}

export function VoiceRecorder({
  isRecording,
  onStop,
  onToggle,
}: VoiceRecorderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [isRecording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Set up Web Audio API
      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);

      // Configure analyser
      analyserRef.current.fftSize = 256;

      // Start MediaRecorder
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        chunksRef.current = [];
        onStop(audioBlob);
      };

      mediaRecorderRef.current.start();
      drawWaveform();
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const drawWaveform = () => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      if (!ctx || !analyserRef.current) return;

      analyserRef.current.getByteTimeDomainData(dataArray);

      ctx.fillStyle = "#383c44";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = "#6b8afd";
      ctx.beginPath();

      const sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * (canvas.height / 2);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  return (
    <div className="flex items-center gap-2">
      <canvas
        ref={canvasRef}
        width={100}
        height={40}
        className={`rounded-lg ${isRecording ? "visible" : "hidden"}`}
      />
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`p-3 rounded-xl transition-colors ${
          isRecording
            ? "bg-red-500 hover:bg-red-600"
            : "text-gray-400 hover:text-gray-300 hover:bg-[#383c44]"
        }`}
        onClick={onToggle}
      >
        <BsMicFill className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
