import { useState,useEffect } from "react"
import MovieCard from "../moviecards/MovieCard"
import useFetch from "./useFetch/useFetch"
const Recommended = () => {
        const api_key=import.meta.env.VITE_API_KEY 
        const url=`https://api.themoviedb.org/3/movie/278/recommendations?api_key=${api_key}`
        const [recomendedvideos]=useFetch(url)

  return (
    <div className='max-w-[900px] mt-5 mb-10 md:mt-0'>
       <div>
         <span className="font-semibold text-[24px] py-5 leading-4">Recommend</span>
           <div className="md:flex items-center mt-3  grid gap-3 grid-cols-2 md:grid-cols-4 md:gap-6">
                {
                    recomendedvideos.slice(0,5).map(movie=>(
                    <MovieCard key={movie.id} movie={movie} />
                    ))
                }
           </div>
       </div>
      {/* start */}
       <div>

       </div>
    </div>
  )
}

export default Recommended
