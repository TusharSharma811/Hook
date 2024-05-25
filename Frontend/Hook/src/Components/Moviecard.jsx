import React from 'react'

const Moviecard = ({thumb , title , description}) => {

  return (
    <>
    <div className='w-[40vw] mx-auto   my-2 md:w-[17rem] md:h-[26rem]   rounded-lg shadow-lg md:m-2  relative cursor-pointer  md:hover:flex-grow-[2] md:hover:flex-shrink-0'>
      <img width={200} height={300} className='w-full h-full rounded-lg md:object-cover  md:aspect-[200/300] ' src={`http://image.tmdb.org/t/p/w500/${thumb}`} alt="" />
        
        <div className='flex flex-col h-full  justify-end gap-y-1 absolute inset-0 p-4 transition-all bg-gradient-to-t from-black/80  to-transparent group'>
        <h5 className='text-xl font-normal font font-Poetson text-white opacity-0 group-hover:opacity-80 transition-all' >{title}</h5>
        <p className='text-sm font-thin font font-sans text-white hidden md:block opacity-0 group-hover:opacity-80 transition-all'>{description}</p>
        
      </div>
    </div>
    </>
  )
}

export default Moviecard