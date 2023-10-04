import React from "react";
import Hamburger from "./Images/hamburger.png";
import Search from "./Images/magnifying-glass.png";
import Translate from "./Images/translation.png";
import DarkMode from "./Images/brightness-and-contrast.png";
import Dashboard from "./Images/dashboard1.png";
import Bell from "./Images/bell.png";

function Navbar({ setOpenLeftSlider }) {
  return (
    <div className="container mx-auto px-1 mt-5">
      <div className="p-6 border-2 border-black rounded-md">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <img
              onClick={() => setOpenLeftSlider(true)}
              src={Hamburger}
              alt=""
              className="w-7 h-7 cursor-pointer"
            />
            <div className="group  ">
              <div className=" group-hover:bg-gray-300 rounded-full p-1.2">
                <img src={Search} alt="" className="w-7 h-7 cursor-pointer" />
              </div>
            </div>
            <div className="fonts font-semibold text-lg lg:block hidden">
              Search
            </div>
            <div className="border border-black p-1.2 rounded-md">⌘K</div>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-2">
              <div className="group">
                <div className=" group-hover:bg-gray-300 rounded-full p-2">
                  <img
                    src={Translate}
                    alt=""
                    className="w-7 h-7 cursor-pointer"
                  />
                </div>
              </div>
              <div className="group">
                <div className=" group-hover:bg-gray-300 rounded-full p-2">
                  <img
                    src={DarkMode}
                    alt=""
                    className="w-7 h-7 cursor-pointer"
                  />
                </div>
              </div>
              <div className="group">
                <div className=" group-hover:bg-gray-300 rounded-full p-2">
                  <img
                    src={Dashboard}
                    alt=""
                    className="w-7 h-7 cursor-pointer"
                  />
                </div>
              </div>
              <div className="group">
                <div className=" group-hover:bg-gray-300 rounded-full p-2 relative">
                  <img src={Bell} alt="" className="w-7 h-7 cursor-pointer" />
                  <div className="absolute top-px right-0  bg-red-800 rounded-full px-1.5 py-px text-sm text-white fonts">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
