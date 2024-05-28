import React from 'react'
import Navbar from '../Components/Navbar'
import Moviecard from '../Components/Moviecard'
import Moviebanner from '../Components/Moviebanner/Moviebanner'
import useMovie from '../Hooks/useMovie'
import Browsesection from '../Components/Browsesection'

const Hero = () => {
  const toprated = [] ;
  const browsedata =[] ;
  for (let index = 1; index < 2; index++) {
    let pagenumber = Math.floor(Math.random()*(20-1)) + 1 ; 
    const data = useMovie(`https://api.themoviedb.org/3/discover/movie?api_key=5495d197b9540fee56d24e9ae9431448&include_adult=false&page=${pagenumber}`) ;
    browsedata.push(data) ;
    const toprateddata = useMovie(`https://api.themoviedb.org/3/movie/top_rated?api_key=5495d197b9540fee56d24e9ae9431448&rgion=IND&include_adult=false&page=${pagenumber}`)
    toprated.push(toprateddata) ;
    
    
  }
 
  
 

 
  return (
    <>
     <Navbar />
   <Moviebanner  /> 
   <div className=' flex flex-col ml-5 scroll-smooth  '>
   <Browsesection data={browsedata} category={"Browse"} />
   <Browsesection data={toprated} category={"Top Rated"}/>
   </div>
   
    </>
  )
}

export default Hero