import React from "react";

const MovieBannercard = ({thumb , title }) => {
   
  return (
    <>
      <div className=" w-screen p-2 h-full mx-2">
        <div className="relative h-full w-full">
        <img 
          className=" w-full h-full object-fill blur-lg"
          src={`http://image.tmdb.org/t/p/w500/${thumb}`}
          alt="Image"
        />
        <img 
          className=" w-[40vw] h-full  absolute top-0 left-[28%]"
          src={`http://image.tmdb.org/t/p/w500/${thumb}`}
          alt="Image"
        />
        </div>
        <div className="w-[7%]  flex flex-col gap-y-2 absolute top-[50%] ">
            <h2 className=" font-sans text-6xl">{title}</h2>
            <div className=" flex gap-x-1">
            <button className=" w-max h-fit px-5 py-2 m-2 rounded-lg shadow-md hover:bg-purple-700 bg-purple-400 text-slate-100 border-black ">Watch</button>
            <button className=" flex gap-x-1 w-max h-fit px-5 py-2 m-2 rounded-lg shadow-md hover:bg-purple-700 bg-purple-400 text-slate-100 ">
                <img src={"/icons8-more-info-ios-17-outlined/icons8-more-info-50.svg"} alt="" />
                More info</button>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default MovieBannercard;
