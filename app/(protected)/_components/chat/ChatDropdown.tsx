import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TiPin } from "react-icons/ti";
import { RiChatDeleteFill } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";
import { TbLockSquareRoundedFilled } from "react-icons/tb";

const ChatDropdown = ({ children }: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl shadow-lg bg-[#131313] mt-2 w-56 border border-gray-800">
        <DropdownMenuLabel className="text-gray-400 text-sm">
          Chat Options
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-800" />
        <DropdownMenuItem className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-800 rounded-xl">
          <TiPin className="h-4 w-4" />
          Pin to Top
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-800 rounded-xl">
          <RiChatDeleteFill className="h-4 w-4" />
          Clear Chat
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-800 rounded-xl">
          <IoCloseCircle className="h-4 w-4" />
          Close Chat
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-800" />
        <DropdownMenuItem className="flex items-center gap-2 text-sm cursor-pointer text-red-500 hover:bg-red-950/50  rounded-xl">
          <TbLockSquareRoundedFilled className="h-4 w-4" />
          Block User
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChatDropdown;
