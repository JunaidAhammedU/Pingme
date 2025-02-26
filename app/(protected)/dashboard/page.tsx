import { auth } from "@clerk/nextjs/server";
import ChatCard from "../_components/ChatCard";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  return (
    <div className="h-full w-full p-6">
      <div className="flex justify-center items-center h-full w-full gap-3">
        <div className="w-[30%] h-[600px] bg-[#2e333d] overflow-auto p-3">
          <div className="mb-4 p-3  sticky top-0 z-10">
            <div className="relative flex items-center justify-center">
              <IoSearch className="absolute left-8 text-xl text-gray-400" />
              <Input
                className="pl-10 py-2 bg-[#383c44] h-10 w-[280px] rounded-xl border-none text-gray-200 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-500"
                placeholder="Search"
              />
            </div>
          </div>
          <ChatCard count={[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]} />
        </div>
        <div className="w-[70%] bg-blue-500"> chat section</div>
      </div>
    </div>
  );
}
