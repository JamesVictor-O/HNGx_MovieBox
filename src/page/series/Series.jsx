import Card from "../../components/CardComponent/card";
import SeriesCard from "../../components/SeriesCardComponents/SeriesCard";
import useFetch from "../landingPage/recommended/useFetch/useFetch";

import React from 'react'
  
const Series = () => {

    const api_key=import.meta.env.VITE_API_KEY 
    const url=`https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}`

    const [recomendedvideos]=useFetch(url)

    console.log(recomendedvideos)

  return (
    <div className="pb-10 px-2 md:p-10 flex flex-col justify-center items-center">
        <section className=" grid gap-3 grid-cols-2 md:grid-cols-4 mt-3 md:gap-6">
            {recomendedvideos.map(movie => (
                <SeriesCard key={movie.id} series={ movie } />
            )
            )}
        </section>
                        
     </div>
  )
}

export default Series
