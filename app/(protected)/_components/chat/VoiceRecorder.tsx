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

      analyserRef.current.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#383c44";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = 3;
      const barGap = 2;
      const bars = Math.floor(canvas.width / (barWidth + barGap));
      const step = Math.floor(bufferLength / bars);

      ctx.beginPath();

      for (let i = 0; i < bars; i++) {
        const dataIndex = i * step;
        const value = dataArray[dataIndex];
        const percent = value / 255;
        const height = canvas.height * percent * 0.8; // 80% of canvas height

        const x = i * (barWidth + barGap);
        const y = (canvas.height - height) / 2;

        // Create gradient for each bar
        const gradient = ctx.createLinearGradient(x, y, x, y + height);
        gradient.addColorStop(0, "#8ba3ff"); // Light blue
        gradient.addColorStop(1, "#6b8afd"); // Original blue

        ctx.fillStyle = gradient;

        // Draw rounded rectangles
        const radius = barWidth / 2;
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + barWidth - radius, y);
        ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius);
        ctx.lineTo(x + barWidth, y + height - radius);
        ctx.quadraticCurveTo(
          x + barWidth,
          y + height,
          x + barWidth - radius,
          y + height
        );
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  return (
    <div className="flex items-center gap-2">
      <canvas
        ref={canvasRef}
        width={600}
        height={40}
        className={`rounded-lg ${
          isRecording ? "visible" : "hidden"
        } transition-opacity duration-300 rounded-xl`}
      />
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`p-3 rounded-xl transition-colors ${
          isRecording
            ? "bg-[#6b8afd] hover:bg-[#4864d1] text-white"
            : "text-gray-400 hover:text-gray-300 hover:bg-[#383c44]"
        }`}
        onClick={onToggle}
      >
        <BsMicFill className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
