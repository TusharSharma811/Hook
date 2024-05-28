import React, { useRef, useState } from "react";
import Moviecard from "./Moviecard";
const Browsesection = ({ data , category }) => {

   const scrollmoviecardref = useRef() ;
    const handleclick = (e , direction , element)=>{
        if(direction === "right" ){
          
          element.scrollLeft += window.innerWidth;
          console.log(window.innerWidth);
       
        }
        else if(direction === "left" ){
            
            element.scrollLeft -= window.innerWidth ;
            console.log(window.innerWidth);
           
        }

    }
  return (
    <>
    
      <h2 className="mt-4 ml-2 text-5xl">{category}</h2>
      {/* <div className="flex justify-between  relative w-screen  items-center h-[26rem]  ">
          <div onClick={(e)=>handleclick(e , "left" , scrollmoviecardref.current)} className=" md:leftscrollicon"></div>
          <div onClick={(e)=>handleclick(e , "right" , scrollmoviecardref.current)} className=" md:rightscrollicon "></div>
        </div> */}
        <div ref={scrollmoviecardref}  className="md:w-screen overflow-x-scroll scrollbar-none scroll-smooth scroll-snap mt-1" >
      <div className={`mt-1 w-fit   flex flex-wrap md:flex-nowrap relative   pb-2  pr-2 gap-1 justify-center  transition-all duration-150 scroll-snap`} >
        
        {data &&
          data.map((element) => {
            return element.results.map((movie, indx) => {
              return movie.overview != "" ? (
                <Moviecard
                  key={indx}
                  thumb={movie.poster_path}
                  title={movie.original_title}
                  description={movie.overview.split(".")[0]}
                  
                />
              ) : null;
            });
          })}
      </div>
      </div>
      
    </>
  );
};

export default Browsesection;
