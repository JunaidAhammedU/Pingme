"use client";

import { Eye, Frown, User } from "lucide-react";

interface ChatBubbleProps {
  direction?: "left" | "right";
}

export default function ChatBubble({ direction = "right" }: ChatBubbleProps) {
  return (
    <div
      className={`flex items-end space-x-2 w-full max-w-md ${
        direction === "right" ? "justify-end" : "justify-start flex-row-reverse"
      }`}
    >
      <div
        className={`text-white rounded-2xl p-3 shadow-lg max-w-sm ${
          direction === "right" ? "bg-[#6b8afd]" : "bg-[#383c44]"
        }`}
      >
        <p className="text-sm font-semibold">Lili Wilson</p>

        <p className="mt-1">
          I'm stuck in traffic, I'll be there a little later
        </p>

        {/* Reactions & Time */}
        <div className="flex items-center justify-between mt-2 text-xs opacity-80">
          <div className="flex space-x-1">
            <Frown size={16} className="text-yellow-300" />
            <User size={16} className="text-gray-300" />
          </div>
          <div className="flex items-center space-x-1">
            <Eye size={16} className="text-gray-300" />
            <span>3</span>
            <span>09:01</span>
          </div>
        </div>
      </div>

      {/* Avatar */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
          direction === "right" ? "bg-[#6b8afd]" : "bg-[#383c44]"
        }`}
      >
        <img
          className="w-8 h-8 rounded-xl object-cover"
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg"
          alt="user"
        />
      </div>
    </div>
  );
}
