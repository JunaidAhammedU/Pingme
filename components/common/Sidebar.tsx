"use client";

import {
  MessageSquare,
  Activity,
  Calendar,
  Bookmark,
  Settings,
  LogOut,
} from "lucide-react";

import { IoIosChatbubbles } from "react-icons/io";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";

// Main navigation items
const mainItems = [
  {
    title: "All Chats",
    url: "/dashboard/chats",
    icon: IoIosChatbubbles,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    title: "Activity",
    url: "/dashboard/activity",
    icon: Activity,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    title: "Calendar",
    url: "/dashboard/calendar",
    icon: Calendar,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    title: "Saved",
    url: "/dashboard/saved",
    icon: Bookmark,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
];

// Footer items
const footerItems = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
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
            <SidebarGroupLabel className="text-2xl font-bold mb-6 text-gray-100">
              Ping
            </SidebarGroupLabel>
            <SidebarGroupContent>
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
                          className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#383c44] transition-all duration-200 group"
                        >
                          <div
                            className={`${item.color} ${item.bgColor} p-2 rounded-lg shadow-sm group-hover:shadow-md transition-shadow`}
                          >
                            <item.icon className="w-6 h-6" />
                          </div>
                          <span className="text-lg font-medium text-gray-300 group-hover:text-gray-100">
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </motion.div>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarSeparator className="my-4 bg-gray-700" />
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
                          className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#383c44] transition-all duration-200 group"
                        >
                          <div className="text-gray-300 bg-gray-700/50 p-2 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <span className="text-lg font-medium text-gray-300 group-hover:text-gray-100">
                            {item.title}
                          </span>
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
