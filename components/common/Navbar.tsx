"use client";

import { UserButton } from "@clerk/nextjs";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import { CgMenuRightAlt } from "react-icons/cg";

export default function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-700 bg-[#2e333d]/80 backdrop-blur-sm">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="text-gray-200 hover:bg-[#383c44]"
            >
              <CgMenuRightAlt className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-200 hover:bg-[#383c44]"
            >
              <IoNotificationsOutline className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500" />
            </Button>
            <UserButton
              afterSignOutUrl="/sign-in"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
