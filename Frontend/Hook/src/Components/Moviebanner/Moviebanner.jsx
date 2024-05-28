import React, { useRef } from "react";
import useMovie from "../../Hooks/useMovie";
import { useState, useEffect } from "react";
import MovieBannercard from "../MovieBannercard";

const Moviebanner = () => {
  let randomnumber = Math.floor(Math.random()*(10 - 1)+1) ;
  // [Math.floor(Math.random() * (20 - 0) + 0)].poster_path
  const randomimage = useMovie(`https://api.themoviedb.org/3/movie/popular?api_key=5495d197b9540fee56d24e9ae9431448&page=${randomnumber}`) ;
  const thumb = randomimage.results.slice(0 , 6) ;
  
  
  return (
    <>
    <div  className=" overflow-hidden h-[80%] w-screen scrollbar-none scroll-snap scroll-smooth">
    <div className=" w-fit h-full  hidden md:flex relative">
    {
      thumb.map((elem , indx)=>{
        return <MovieBannercard key={indx} thumb={elem.poster_path} title={elem.title} description={elem.overview.split(".")[0]} />
      })
    }
    </div>
    </div>
    </>
  );
};

export default Moviebanner;
