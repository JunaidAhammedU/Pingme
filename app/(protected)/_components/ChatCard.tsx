import React from "react";
import { TiPin } from "react-icons/ti";

const ChatCard = ({ count }: any) => {
  return (
    <>
      {count.map((item: any, index: number) => (
        <div className="px-2 py-1 " key={index}>
          <div className="flex items-center p-4 gap-3 bg-[#2c2f36] hover:bg-[#343841] transition-all duration-200 rounded-2xl cursor-pointer shadow-sm hover:shadow-md">
            <div className="relative">
              <img
                className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-500"
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg"
                alt="user"
              />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#2c2f36]" />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h1 className="text-base font-semibold text-gray-100 truncate max-w-[180px]">
                  Junaid Ahammed
                </h1>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                    4m
                  </span>
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-xs font-medium text-white">
                    3
                  </span>
                  <TiPin className="text-blue-400 hover:text-blue-300" />
                </div>
              </div>
              <p className="text-sm text-gray-400 truncate max-w-[200px] mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                error non distinctio quisquam mollitia sed, quas quam corrupti
                quasi, aliquam quae sapiente reprehenderit pariatur hic, ut ipsa
                sunt! Cum, similique?
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatCard;
