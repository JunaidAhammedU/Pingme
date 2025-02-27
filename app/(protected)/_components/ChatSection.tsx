import { Input } from "@/components/ui/input";
import { IoCall, IoSearch, IoSend } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import Thumbnail from "./Thumbnail";
import {
  PiDotsThreeOutlineVerticalDuotone,
  PiSidebarSimpleDuotone,
} from "react-icons/pi";

export default function ChatSection() {
  return (
    <div className="flex flex-col h-full bg-[#2e333d] rounded-2xl">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Thumbnail />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#2c2f36]" />
          </div>
          <div>
            <h2 className="text-gray-100 font-semibold">Junaid Ahammed</h2>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="hover:text-gray-200 transition-colors">
            <IoSearch className="text-[20px] text-white/50" />
          </button>
          <button className="hover:text-gray-200 transition-colors">
            <IoCall className="text-[20px] text-white/50" />
          </button>
          <button className="hover:text-gray-200 transition-colors">
            <PiSidebarSimpleDuotone className="text-[20px] text-white/50" />
          </button>
          <button className="hover:text-gray-200 transition-colors">
            <PiDotsThreeOutlineVerticalDuotone className="text-[20px] text-white/50" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {/* Received Message */}
        <div className="flex items-end gap-2 max-w-[80%]">
          <img
            className="w-8 h-8 rounded-full"
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg"
            alt="user"
          />
          <div className="bg-[#383c44] p-3 rounded-2xl rounded-bl-none">
            <p className="text-gray-200">Hey, how are you?</p>
            <span className="text-xs text-gray-400 mt-1">12:30 PM</span>
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex items-end justify-end gap-2 max-w-[80%] ml-auto">
          <div className="bg-blue-600 p-3 rounded-2xl rounded-br-none">
            <p className="text-white">I'm doing great, thanks for asking!</p>
            <span className="text-xs text-blue-200 mt-1">12:31 PM</span>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-3 border-t border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Input
              className="w-full bg-[#383c44] border-none text-gray-200 pl-4 pr-24 py-6 rounded-xl placeholder:text-gray-400"
              placeholder="Type a message..."
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400">
              <button className="hover:text-gray-200 transition-colors">
                <BsEmojiSmile size={20} />
              </button>
              <button className="hover:text-gray-200 transition-colors">
                <FiPaperclip size={20} />
              </button>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-colors">
            <IoSend className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
