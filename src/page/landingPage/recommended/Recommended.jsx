import { useState,useEffect } from "react"
import MovieCard from "../moviecards/MovieCard"
import useFetch from "./useFetch/useFetch"
const Recommended = () => {
        const api_key=import.meta.env.VITE_API_KEY 
        const url=`https://api.themoviedb.org/3/movie/278/recommendations?api_key=${api_key}`
        const [recomendedvideos]=useFetch(url)

  return (
    <div className='max-w-[900px] mx-4 mt-5 mb-10 md:mx-0 md:mt-4'>
       <div>
         <span className="font-semibold text-[24px] py-5 leading-4">Recommend</span>
           <div className="md:flex items-center mt-3  grid gap-4 grid-cols-2 md:grid-cols-4 md:gap-6">
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
