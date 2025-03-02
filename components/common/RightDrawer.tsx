import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiLink, FiFile, FiImage, FiMail, FiPhone } from "react-icons/fi";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { BiBlock } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import toast from "react-hot-toast";

interface RightDrawerProps {
  children: React.ReactNode;
}

const RightDrawer = ({ children }: RightDrawerProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] bg-[#121418] text-white overflow-y-auto">
        {/* Profile Section */}
        <div className="relative">
          <div className="p-4 mt-2 flex items-center justify-center">
            <img
              className="w-32 h-32 rounded-full object-cover ring-4 ring-blue-500/30"
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg"
              alt="user"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-1">Junaid Ahammed</h1>
            <p className="text-green-400 text-sm">Online</p>
          </div>
        </div>

        <div className="mt-8 px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold">Contact Info</h2>
          </div>
          <div className="space-y-4">
            <div
              onClick={() => {
                navigator.clipboard.writeText("junaid@example.com");
                toast.success("Email copied to clipboard!", {
                  style: {
                    background: "#333",
                    color: "#fff",
                  },
                });
              }}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r bg-[#2e333d] transition-all duration-300 cursor-pointer backdrop-blur-sm hover:bg-[#363b47]"
            >
              <div className="p-3 rounded-xl bg-black/20">
                <FiMail className="text-white text-xl" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 font-medium">Email</p>
                <p className="text-sm font-semibold mt-0.5">
                  junaid@example.com
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <FiLink className="text-gray-400 hover:text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[3px] my-6 rounded-full bg-gray-500/20"></div>

        <div className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold">
              Shared Media <span className="text-gray-500 ms-2">136</span>
            </h2>
            <p className="text-xs underline text-gray-500 cursor-pointer hover:text-gray-400">
              See All
            </p>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className="flex-shrink-0 w-34 h-20 rounded-xl overflow-hidden"
              >
                <img
                  src={`https://picsum.photos/200/200?random=${item}`}
                  alt="shared"
                  className="w-full h-full rounded-xl object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold">
              Shared Files <span className="text-gray-500 ms-2">136</span>
            </h2>
            <p className="text-xs underline text-gray-500 cursor-pointer hover:text-gray-400">
              See All
            </p>
          </div>
          <div className="space-y-3">
            {["Document.pdf", "Presentation.pptx", "Report.docx"].map(
              (file) => (
                <div
                  key={file}
                  className="flex items-center gap-3 py-2 rounded-lg cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-gray-700/30">
                    <HiDocumentDuplicate className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{file}</p>
                    <p className="text-xs text-gray-400">2.4 MB • Yesterday</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="w-full h-[3px] my-6 rounded-full bg-gray-500/20"></div>

        {/* Actions Section */}
        <div className="mt-6 px-4 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold">Actions</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 flex flex-col items-center gap-2 rounded-2xl bg-red-500/10 hover:bg-red-500/20 transition-colors">
              <div className="p-2 rounded-xl bg-red-500/20">
                <BiBlock className="text-red-400 text-xl" />
              </div>
              <span className="text-xs text-red-400">Block User</span>
            </button>
            <button className="p-3 flex flex-col items-center gap-2 rounded-2xl bg-orange-500/10 hover:bg-orange-500/20 transition-colors">
              <div className="p-2 rounded-xl bg-orange-500/20">
                <MdReport className="text-orange-400 text-xl" />
              </div>
              <span className="text-xs text-orange-400">Report User</span>
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default RightDrawer;
