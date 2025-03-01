"use client";

import { PiUsersThreeFill } from "react-icons/pi";
import { HiCalendar, HiStar } from "react-icons/hi";
import { IoIosChatbubbles } from "react-icons/io";
import { TbBookmarkFilled, TbSettingsFilled } from "react-icons/tb";
import { RiVipCrownFill } from "react-icons/ri";
import { HiMiniBellAlert } from "react-icons/hi2";
import { BiSolidHelpCircle } from "react-icons/bi";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../ui/sidebar";

// Main navigation items
const mainItems = [
  {
    title: "All Chats",
    url: "/dashboard",
    icon: IoIosChatbubbles,
    badge: "12",
  },
  {
    title: "Calendar",
    url: "/dashboard/calendar",
    icon: HiCalendar,
  },
  {
    title: "Saved",
    url: "/dashboard/saved",
    icon: TbBookmarkFilled,
  },
  {
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: HiMiniBellAlert,
    badge: "3",
  },
];

// Footer items
const footerItems = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: TbSettingsFilled,
  },
  {
    title: "Help & Support",
    url: "/dashboard/support",
    icon: BiSolidHelpCircle,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="hidden md:flex bg-[#2e333d] border-r border-gray-700">
      <SidebarContent className="text-gray-200 p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SidebarGroup>
            <Link href="/dashboard">
              <SidebarGroupLabel className="flex items-center gap-3 mb-8 px-2 sticky top-0 bg-[#2e333d] z-10">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/logo.png"
                    alt="logo"
                    className="w-10 h-10 rounded-xl shadow-lg"
                  />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                      Pingme
                    </span>
                    <span className="text-xs text-gray-400">
                      One ping at a time.
                    </span>
                  </div>
                </div>
              </SidebarGroupLabel>
            </Link>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center justify-center p-3 bg-[#383c44] rounded-xl hover:bg-[#424750] transition-all"
              >
                <PiUsersThreeFill className="w-5 h-5 mb-1" />
                <span className="text-xs">New Group</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center justify-center p-3 bg-[#383c44] rounded-xl hover:bg-[#424750] transition-all"
              >
                <HiStar className="w-5 h-5 mb-1" />
                <span className="text-xs">Starred</span>
              </motion.button>
            </div>

            <SidebarGroupContent>
              {/* Main Menu */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-gray-400 mb-4 px-2">
                  MAIN MENU
                </h3>
                <SidebarMenu>
                  {mainItems.map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SidebarMenuItem className="mb-3">
                        <SidebarMenuButton
                          asChild
                          tooltip={item.title}
                          className="w-full"
                        >
                          <Link
                            href={item.url}
                            className="flex items-center justify-between py-6  bg-[#383c44] rounded-xl hover:bg-[#424750] transition-all group"
                          >
                            <div className="flex items-center gap-1">
                              <div className="p-2 px-3 rounded-xl shadow-sm bg-[#383c44] transition-all">
                                <item.icon className="w-5 h-5" />
                              </div>
                              <span className="text-base font-medium text-gray-300 group-hover:text-gray-100">
                                {item.title}
                              </span>
                            </div>
                            {item.badge && (
                              <span className="px-2 py-1 text-xs font-medium bg-[#6b8afd] text-white rounded-xl">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </motion.div>
                  ))}
                </SidebarMenu>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </motion.div>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarSeparator className="my-3 bg-gray-700" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {footerItems.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SidebarMenuItem className="mb-3">
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <Link
                          href={item.url}
                          className="flex items-center justify-between py-4  bg-[#383c44] rounded-xl hover:bg-[#424750] transition-all group"
                        >
                          <div className="flex items-center gap-1">
                            <div className="p-2 px-3 shadow-sm">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <span className="text-base font-medium text-gray-300 group-hover:text-gray-100">
                              {item.title}
                            </span>
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <div className="mt-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-xl border border-gray-700 bg-[#383c44] p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <UserButton
                afterSignOutUrl="/sign-in"
                appearance={{
                  elements: {
                    avatarBox: "h-12 w-12",
                  },
                }}
              />
              <div className="flex-1 overflow-hidden">
                <div className="truncate text-base font-medium text-gray-200">
                  Profile
                </div>
                <div className="truncate text-sm text-gray-400">
                  Manage your account
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </SidebarFooter>
    </Sidebar>
  );
}
