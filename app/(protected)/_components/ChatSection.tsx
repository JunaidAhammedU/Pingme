"use client";
import ChatBubble from "./ChatBubble";
import { ChatHeader } from "./chat/ChatHeader";
import { MessageInput } from "./chat/MessageInput";
import { useState } from "react";

export default function ChatSection() {
  const [message, setMessage] = useState("");
  const [isAttaching, setIsAttaching] = useState(false);

  const handleSendMessage = () => {
    // Handle sending message
    console.log("Sending message:", message);
    setMessage("");
  };

  const handleAttachment = () => {
    setIsAttaching(true);
    // Handle attachment logic
  };

  return (
    <div className="flex flex-col h-full bg-[#2e333d] rounded-2xl">
      {/* Chat Header */}
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-3 space-y-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex items-end gap-2 max-w-[80%]">
          <div>
            <ChatBubble direction={"left"} />
          </div>
        </div>

        <div className="flex items-end justify-end gap-2 max-w-[80%] ml-auto">
          <ChatBubble direction={"right"} />
        </div>
        <div className="flex items-end gap-2 max-w-[80%]">
          <div>
            <ChatBubble direction={"left"} />
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <MessageInput
        value={message}
        onChange={setMessage}
        onSend={handleSendMessage}
        isAttaching={isAttaching}
        onAttach={handleAttachment}
      />
    </div>
  );
}
