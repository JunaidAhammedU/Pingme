// import { auth } from "@clerk/nextjs/server";
// export default async function DashboardPage() {
//   const { userId } = await auth();
//   if (!userId) {
//     return null;
//   }
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold">Dashboard</h1>
//       <p>Welcome, User {userId}!</p>
//     </div>
//   );
// }
"use client";
import { useState } from "react";

// // Sample chat data (you can replace this with real data from an API)
// const sampleChats = [
//   {
//     id: 1,
//     name: "Harry Patel",
//     message: "Our company needs to prepare...",
//     time: "9:21 AM",
//     avatar: "https://i.pravatar.cc/150?img=1",
//     unread: true,
//   },
//   {
//     id: 2,
//     name: "Frank Garcia",
//     message: "Our company needs to prepare...",
//     time: "9:21 AM",
//     avatar: "https://i.pravatar.cc/150?img=2",
//     unread: false,
//   },
//   {
//     id: 3,
//     name: "Maria Gonzalez",
//     message: "Our company needs to prepare...",
//     time: "9:21 AM",
//     avatar: "https://i.pravatar.cc/150?img=3",
//     unread: true,
//   },
//   {
//     id: 4,
//     name: "Jenny Ly",
//     message: "We’re already starting, hurry up it’s late!",
//     time: "10:02 AM",
//     avatar: "https://i.pravatar.cc/150?img=4",
//     unread: false,
//   },
//   {
//     id: 5,
//     name: "Lili Wilson",
//     message: "I’m stuck in traffic. Be there a little later!",
//     time: "10:15 AM",
//     avatar: "https://i.pravatar.cc/150?img=5",
//     unread: true,
//   },
// ];

// // Sample messages for a selected chat (you can expand this)
// const sampleMessages = [
//   {
//     id: 1,
//     sender: "Harry Patel",
//     text: "Hey, are we ready for the meeting?",
//     time: "9:21 AM",
//   },
//   {
//     id: 2,
//     sender: "You",
//     text: "Almost, just finalizing a few details.",
//     time: "9:22 AM",
//   },
//   {
//     id: 3,
//     sender: "Harry Patel",
//     text: "Great, see you soon!",
//     time: "9:23 AM",
//   },
// ];

export default async function DashboardPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [selectedChat, setSelectedChat] = useState([]);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Main Chat Area (split into Chat List and Conversation) */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Chats</h2>
        </div>

        {/* Chat List and Conversation Split */}
        <div className="flex-1 flex overflow-hidden">
          {/* Chat List (Left Column) */}
          <div className="w-1/3 border-r border-gray-700 overflow-y-auto">
            {/* {sampleChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`p-4 cursor-pointer hover:bg-gray-800 flex items-center gap-3 ${
                  selectedChat.id === chat.id ? "bg-gray-700" : ""
                }`}
              >
                <img
                  src={chat.avatar}
                  alt={`${chat.name}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 overflow-hidden">
                  <div className="font-medium truncate">{chat.name}</div>
                  <div className="text-sm text-gray-400 truncate">
                    {chat.message}
                  </div>
                </div>
                <div className="text-xs text-gray-500">{chat.time}</div>
                {chat.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ))} */}
          </div>

          {/* Conversation Area (Right Column) */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            {/* Messages */}
            <div className="p-4 flex-1">
              {/* {sampleMessages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${
                    message.sender === "You" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === "You"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-100"
                    }`}
                  >
                    {message.text}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {message.time}
                  </div>
                </div>
              ))} */}
            </div>

            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="p-2 bg-blue-600 rounded-md hover:bg-blue-700">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
