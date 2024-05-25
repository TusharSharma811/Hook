import React from 'react'
import Moviecard from './Moviecard'
const Browsesection = ({data}) => {
  return (
    <>
    <h2 className='mt-20 md:ml-2 ml-7 text-5xl'>Browse</h2>
   <div className='mt-1 w-fit overflow-y-scrll flex flex-wrap md:flex-nowrap relative   pb-2  pr-2 gap-1 justify-center before:leftscrollicon'>
   {
    data && data.map(element => {
       
       return  element.results.map((movie, indx)=>{ return movie.overview !="" ?  <Moviecard key={indx} thumb={movie.poster_path} title={movie.original_title} description={movie.overview.split(".")[0]}/> :  null})
        
    })
   }
   </div>
    </>
  )
}

export default Browsesection