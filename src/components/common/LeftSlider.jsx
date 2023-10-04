import React from "react";
import Logo from "./Images/dashboard.png";
import Close from "./Images/close.png";
import Mail from "./Images/mail.png";
import Chat from "./Images/chat.png";

function LeftSlider({ setOpenLeftSlider }) {
  return (
    <div className="fixed bg-black bg-opacity-50 top-0 left-0 z-40 w-full h-full ">
      <div className="w-72 h-full bg-white duration-100 transition-transform translate-x-full sm:translate-x-0">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="" className="w-7 h-7 cursor-pointer" />
            <p className="fonts font-semibold text-xl cursor-pointer">
              Dashboard
            </p>
            <img
              onClick={() => setOpenLeftSlider(false)}
              src={Close}
              alt=""
              className="w-3 h-3 ml-auto cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-lg  font-semibold">Apps & pages</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img src={Mail} alt="" className="w-7 h-7 cursor-pointer" />
                <p className="text-lg">Email</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={Chat} alt="" className="w-7 h-7 cursor-pointer" />
                <p className="text-lg">Chat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSlider;
