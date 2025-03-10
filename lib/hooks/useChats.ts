import { create } from "zustand";
import { Chat, Message } from "@/types/chat";

interface ChatStore {
  chats: Chat[];
  activeChat: string | null;
  messages: { [chatId: string]: Message[] };
  setActiveChat: (chatId: string) => void;
  addMessage: (chatId: string, message: Message) => void;
}

// Zustand store for chat state
export const useChats = create<ChatStore>((set) => ({
  chats: [],
  activeChat: null,
  messages: {},
  setActiveChat: (chatId) => set({ activeChat: chatId }),
  addMessage: (chatId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [chatId]: [...(state.messages[chatId] || []), message],
      },
    })),
}));
