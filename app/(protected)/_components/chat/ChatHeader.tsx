import { StatusIndicator } from "@/components/common/StatusIndicator";
import { useChats } from "@/lib/hooks/useChats";
import { IoCall } from "react-icons/io5";
import {
  PiDotsThreeOutlineVerticalDuotone,
  PiSidebarSimpleDuotone,
} from "react-icons/pi";
import Thumbnail from "../Thumbnail";

export function ChatHeader() {
  //   const { activeChat, chats } = useChats();
  //   const chat = chats.find((c) => c.id === activeChat);
  //   if (!chat) return null;

  //   const participant = chat.participants[0];

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Thumbnail />
          <StatusIndicator status={"online"} />
        </div>
        <div>
          <h2 className="text-gray-100 font-medium">Junaid</h2>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <IoCall className="w-5 h-5 text-gray-400 cursor-pointer" />
        <PiSidebarSimpleDuotone className="w-5 h-5 text-gray-400 cursor-pointer" />
        <PiDotsThreeOutlineVerticalDuotone className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
}
