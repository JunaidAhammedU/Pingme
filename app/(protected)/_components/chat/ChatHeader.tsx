import { StatusIndicator } from "@/components/common/StatusIndicator";
// import { useChats } from "@/lib/hooks/useChats";
import { RiVideoOnAiFill } from "react-icons/ri";
import {
  PiDotsThreeOutlineVerticalDuotone,
  PiSidebarSimpleDuotone,
} from "react-icons/pi";
import Thumbnail from "../Thumbnail";
import RightDrawer from "@/components/common/RightDrawer";
import ChatDropdown from "./ChatDropdown";

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

      <div className="flex items-center gap-6">
        <RiVideoOnAiFill className="w-[40px] h-[40px] text-gray-400 cursor-pointer hover:bg-[#383c44] p-2 rounded-xl" />
        <RightDrawer>
          <PiSidebarSimpleDuotone className="w-[40px] h-[40px] text-gray-400 cursor-pointer hover:bg-[#383c44] p-2 rounded-xl" />
        </RightDrawer>
        <ChatDropdown>
          <PiDotsThreeOutlineVerticalDuotone className="w-[40px] h-[40px] text-gray-400 cursor-pointer hover:bg-[#383c44] p-2 rounded-xl" />
        </ChatDropdown>
      </div>
    </div>
  );
}
//hover:bg-[#383c44]
