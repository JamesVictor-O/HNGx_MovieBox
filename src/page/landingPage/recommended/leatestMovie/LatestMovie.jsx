import React from 'react'
import MovieCard from '../../moviecards/MovieCard'
import useFetch from '../useFetch/useFetch'

const LatestMovie = () => {
    const api_key=import.meta.env.VITE_API_KEY 
    const url=`https://api.themoviedb.org/3/movie/latest?api_key=${api_key}`

    const [recomendedvideos]=useFetch("https://api.themoviedb.org/3/movie/upcoming?api_key=3ee590547c6286425382a40bab207116")

  return (
    <div className='hidden md:block max-w-[900px] mt-5'>
         <div>
         <span className="font-semibold text-[24px] py-5 leading-4">Latest Movie</span>
           <div className="flex items-center gap-3 mt-3 flex-wrap md:flex-nowrap">
                {
                    recomendedvideos.slice(0,5).map(movie=>(
                    <MovieCard key={movie.id} movie={movie} />
                    ))
                }
           </div>
       </div>
    </div>
  )
}

export default LatestMovie
