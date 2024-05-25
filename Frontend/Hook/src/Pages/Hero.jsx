import React from 'react'
import Navbar from '../Components/Navbar'
import Moviecard from '../Components/Moviecard'
import Moviebanner from '../Components/Moviebanner/Moviebanner'
import useMovie from '../Hooks/useMovie'
import Browsesection from '../Components/Browsesection'

const Hero = () => {
  
  const data1 = useMovie("https://api.themoviedb.org/3/discover/movie?api_key=5495d197b9540fee56d24e9ae9431448&page=3") ;
  const data2 = useMovie("https://api.themoviedb.org/3/discover/movie?api_key=5495d197b9540fee56d24e9ae9431448&page=1") ;
  
  const data =[data1 , data2] ;
  console.log(data);
  return (
    <>
     <Navbar />
   <Moviebanner path={data[0]}  /> 
   <div className=' flex flex-col overflow-x-scroll scrollbar-none'>
   <Browsesection data={data} />
   </div>
   
    </>
  )
}

export default Hero