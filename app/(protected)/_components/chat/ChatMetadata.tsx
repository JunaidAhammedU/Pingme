import { Chat } from "@/types/chat";
import { TiPin } from "react-icons/ti";

export function ChatMetadata({ chat }: { chat: Chat }) {
  return (
    <div className="flex items-center gap-2">
      {chat.isPinned && <TiPin className="w-4 h-4 text-blue-400" />}
      <span className="text-xs text-gray-400">
        {chat.lastMessage?.timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
      {chat.unreadCount > 0 && (
        <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">
          {chat.unreadCount}
        </span>
      )}
    </div>
  );
}
