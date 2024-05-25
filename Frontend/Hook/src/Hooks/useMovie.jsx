import React, { useState } from 'react'
import { useEffect } from 'react'

const useMovie = (url) => {
    const [movies , setMovies] = useState({results : []}) ;
  useEffect( ()=>{
        const fetchmovie =  ()=>{
          fetch(url).then(res => res.json()).then(data => setMovies(data))
        }
        fetchmovie() ;
 } , [])
     
        return movies ;
      
      

 }
 


export default useMovie