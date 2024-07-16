import { useState,useEffect } from "react"
import MovieCard from "../moviecards/MovieCard"
const Recommended = () => {
    const [recomendedvideos,setrecommendedvideos]=useState([])
    const url='https://api.themoviedb.org/3/movie/278/recommendations?api_key=3ee590547c6286425382a40bab207116'
    useEffect(()=>{
        fetch(url)
        .then(repones => repones.json()).then(data => setrecommendedvideos(data.results))
        .catch(err => console.log(err))
    },[])
   
  return (
    <div className='max-w-[800px] mt-5'>
       <div>
         <span className="font-semibold text-[24px] py-5 leading-4">Recommend</span>
           <div className="flex items-center gap-3 mt-3">
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
