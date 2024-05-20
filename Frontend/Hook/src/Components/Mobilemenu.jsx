import React from 'react'

const Mobilemenu = ({visible}) => {
     if(!visible){
        return null ;
     }  
    return (
    <> 
    <div className=' bg-black w-56 absolute top-8 left-6 py-5 flex-col border-2 border-grey-800 flex '>
        <div className='flex flex-col gap-4'>
            <div className=' px-3 text-center text-white hover:underline'>
                Home
            </div>
            <div className=' px-3 text-center text-white hover:underline'>
                Films
            </div>
            <div className=' px-3 text-center text-white hover:underline'>
                Series
            </div>
            <div className=' px-3 text-center text-white hover:underline'>
                New & Popular
            </div>
            <div className=' px-3 text-center text-white hover:underline'>
                My List
            </div>
            <div className=' px-3 text-center text-white hover:underline'>
                Browse by Language
            </div>

        </div>
    </div>
    </>
  )
}

export default Mobilemenu