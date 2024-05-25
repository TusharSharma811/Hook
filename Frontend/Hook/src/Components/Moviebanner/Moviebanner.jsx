import React, { useRef } from "react";
import useMovie from "../../Hooks/useMovie";
import { useState, useEffect } from "react";

const Moviebanner = ({path}) => {
  const [movie , setMoviepath]= useState("") ;
  const vidref = useRef() ;
  useEffect( ()=>{
    fetch("http://localhost:4000/api/movie").then(res => res.json()).then(data =>{
      let random = Math.floor(Math.random()*(data.length - 1) + 1) ; 
      setMoviepath(data[random]["YouTube Trailer"])

    })
} , [])

  return (
    <>
      <div className="relative top-0 w-screen h-[70vh]  hidden md:block ">
      {/* <iframe className="w-screen h-[100%]"
            src={`https://www.youtube.com/embed/${movie}/?autoplay=1&mute=1&controls=0&showinfo=0`}
            allow="autoplay"> 
    </iframe>  */}
      </div>
    </>
  );
};

export default Moviebanner;
