import React from "react";
import Navbar from "../Components/Navbar";


const Authpage = () => {
  return (
    <div className=" relative w-full h-full bg-[url('/Hero.jpg')] bg-fixed bg-no-repeat bg-cover">
      <div className=" bg-black w-full h-full lg:bg-opacity-50">
        <Navbar />
        <div className="flex justify-center">
          <div className=" bg-black bg-opacity-50 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-lg w-full">
            <h2 className=" translate-x-[40%]">Sign in</h2>
            <div className=" flex flex-col gap-4">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
