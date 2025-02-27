import { auth } from "@clerk/nextjs/server";
import ChatCard from "../_components/ChatCard";
import ChatSection from "../_components/ChatSection";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) return null;

  return (
    <div className="h-[calc(100vh-4rem)] w-full p-2 sm:p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row h-full w-full gap-3">
        {/* Chat List */}
        <div className="w-full lg:w-[350px] h-[calc(100vh-6rem)] bg-[#2e333d] overflow-auto rounded-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="mb-4 p-3 sticky top-0 z-10 bg-[#2e333d]">
            <div className="relative flex items-center justify-center">
              <IoSearch className="absolute left-3 text-xl text-gray-400" />
              <Input
                className="pl-10 py-2 bg-[#383c44] h-10 w-full rounded-xl border-none text-gray-200 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-500"
                placeholder="Search"
              />
            </div>
          </div>
          <ChatCard count={[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]} />
        </div>

        {/* Chat Section */}
        <div className="flex-1 h-[calc(100vh-6rem)]">
          <ChatSection />
        </div>
      </div>
    </div>
  );
}
