import React from "react";
import Navbaritem from "./Navbaritem";
import Mobilemenu from "./Mobilemenu";
import { useState } from "react";

const Navbar = () => {
  const [showmobile, setShowmobile] = useState(false);
  return (
    <>
      <nav className=" fixed z-40 w-full top-0">
        <div className="px-4 md:px-16 py-6 flex flex-row items-center  transition duration-500 bg-zinc-900 bg-opacity-90 md:bg-transparent">
          <img src="/Logo.svg" alt="" className=" h-4 lg:h-8" />
          <div className="flex-row ml-8 gap-7 hidden lg:flex">
            <Navbaritem label="Home" />
            <Navbaritem label="Series" />
            <Navbaritem label="Films" />
            <Navbaritem label="New & Popular" />
            <Navbaritem label="My List" />
            <Navbaritem label="Browse by language" />
          </div>
          <div className=" lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative ">
            <p className=" text-white text-sm">Browse</p>
            <img
              onClick={() => setShowmobile((current) => !current)}
              src="/chevron.svg"
              alt=""
              className=" rotate-90 h-[0.8rem] w-[0.8rem] text-white"
            />
            <Mobilemenu visible={showmobile} />
          </div>
          <div className=" flex flex-row ml-auto gap-7 items-center">
            <div className=" text-gray-200 hover:text-gray-300 cursor-pointer">
              <img
                src="/searchicon.svg"
                alt=""
                className=" h-[1rem] w-[1rem] text-white font-bold "
              />
            </div>
            <div className=" text-gray-200 hover:text-gray-300 cursor-pointer">
              <img
                src="/bell.svg"
                alt=""
                className=" h-[1rem] w-[1rem] text-white font-bold "
              />
            </div>
            <div className=" flex relative gap-2 items-center cursor-pointer">
              <img src="/Netflix-avatar.png" alt="" className=" w-[1.5rem] h-[1.5rem]"/>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
