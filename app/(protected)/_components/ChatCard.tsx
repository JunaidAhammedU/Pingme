import React from "react";
import { TiPin } from "react-icons/ti";
import Thumbnail from "./Thumbnail";

const ChatCard = ({ count }: any) => {
  return (
    <>
      {count.map((item: any, index: number) => (
        <div className="px-2 py-0.5" key={index}>
          <div className="flex items-center p-4 gap-3 bg-[#2e333d] hover:bg-[#343841] transition-all duration-200 rounded-2xl cursor-pointer">
            <div className="relative flex-shrink-0">
              <Thumbnail />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#2c2f36]" />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h1 className="text-sm font-semibold text-gray-100 truncate max-w-[120px]">
                  Junaid Ahammed
                </h1>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                    4m
                  </span>
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-xs font-medium text-white">
                    3
                  </span>
                  <TiPin className="text-blue-400 hover:text-blue-300" />
                </div>
              </div>
              <p className="text-xs text-gray-400 truncate mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatCard;
