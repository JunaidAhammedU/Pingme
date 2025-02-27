export interface User {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline" | "away";
  lastSeen?: Date;
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  timestamp: Date;
  status: "sent" | "delivered" | "read";
  reactions?: {
    type: string;
    userId: string;
  }[];
  attachments?: {
    id: string;
    type: "image" | "file" | "audio";
    url: string;
  }[];
}

export interface Chat {
  id: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
}
