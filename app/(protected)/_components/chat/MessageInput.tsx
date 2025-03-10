import { useState, useRef } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { motion, AnimatePresence } from "framer-motion";
import { TbGift } from "react-icons/tb";
import GifPicker from "./GIFPicker";
import { VoiceRecorder } from "./VoiceRecorder";
import { RiSendPlaneFill } from "react-icons/ri";

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (content: string, type?: "text" | "gif") => void;
  isAttaching: boolean;
  onAttach: () => void;
}

export function MessageInput({
  value,
  onChange,
  onSend,
  isAttaching,
  onAttach,
}: MessageInputProps) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [showGifs, setShowGifs] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const handleEmojiSelect = (emojiData: any) => {
    onChange(value + emojiData.emoji);
    setShowEmoji(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachedFile(file);
      onAttach();
    }
  };

  const handleRecordToggle = () => {
    setIsRecording(!isRecording);
    // Add your audio recording logic here
  };

  const handleGifSelect = (gifUrl: string) => {
    onSend(gifUrl, "gif");
    setShowGifs(false);
  };

  const handleVoiceRecordingStop = (blob: Blob) => {
    setAudioBlob(blob);
    // Here you can handle the audio blob:
    // 1. Upload it to your server
    // 2. Convert it to base64
    // 3. Send it through your chat system
  };

  return (
    <div className="relative p-4">
      {/* Emoji Picker */}
      <AnimatePresence>
        {showEmoji && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full mb-2 left-0"
          >
            <EmojiPicker
              onEmojiClick={handleEmojiSelect}
              skinTonesDisabled
              searchPlaceHolder="Search emoji..."
              height={400}
              width={400}
              previewConfig={{ showPreview: false }}
              lazyLoadEmojis
              theme={Theme.DARK}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* GIF Picker */}
      <AnimatePresence>
        {showGifs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full mb-2 left-12"
          >
            <div className="bg-[#383c44] p-4 rounded-lg">
              <div className="w-[320px] h-[400px]">
                <GifPicker onSelect={handleGifSelect} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* File Preview */}
      {attachedFile && (
        <div className="mb-2 p-2 bg-[#383c44] rounded-lg flex items-center justify-between">
          <span className="text-sm text-gray-300 truncate">
            {attachedFile.name}
          </span>
          <button
            onClick={() => setAttachedFile(null)}
            className="text-gray-400 hover:text-gray-200"
          >
            ×
          </button>
        </div>
      )}

      <div className="flex items-center gap-3">
        <button
          className={`text-gray-400 hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-[#383c44] ${
            showEmoji ? "bg-[#383c44] text-gray-200" : ""
          }`}
          onClick={() => {
            setShowEmoji(!showEmoji);
            setShowGifs(false);
          }}
        >
          <BsEmojiSmile className="w-5 h-5" />
        </button>

        <button
          className={`text-gray-400 hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-[#383c44] ${
            showGifs ? "bg-[#383c44] text-gray-200" : ""
          }`}
          onClick={() => {
            setShowGifs(!showGifs);
            setShowEmoji(false);
          }}
        >
          <TbGift className="w-5 h-5" />
        </button>

        <button
          className="text-gray-400 hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-[#383c44]"
          onClick={() => fileInputRef.current?.click()}
        >
          <FiPaperclip className="w-5 h-5" />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*,video/*,audio/*"
          />
        </button>

        <div className="flex-1 relative h-[46px]">
          <AnimatePresence mode="wait">
            {isRecording ? (
              <motion.div
                key="recorder"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 flex items-center gap-2"
              >
                <div className="flex-1">
                  <VoiceRecorder
                    isRecording={isRecording}
                    onStop={handleVoiceRecordingStop}
                    onToggle={handleRecordToggle}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0"
              >
                <input
                  type="text"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  className="w-full h-full bg-[#383c44] text-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6b8afd] transition-all"
                  placeholder="Type a message..."
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {value.length > 0 ? (
            <motion.button
              key="send"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-white bg-[#6b8afd] p-3 rounded-2xl hover:bg-[#5a75e0] transition-colors"
              onClick={() => onSend(value, "text")}
            >
              <RiSendPlaneFill className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              key="mic"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className={`p-3 rounded-2xl transition-colors ${
                isRecording
                  ? "bg-[#6b8afd] hover:bg-[#4864d1] text-white"
                  : "text-gray-400 hover:text-gray-300 hover:bg-[#383c44]"
              }`}
              onClick={handleRecordToggle}
            >
              <FaMicrophone className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
