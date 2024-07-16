import React, { useEffect } from 'react'
// import coverpic from "../../../assets/coverpic.svg"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie}) => {
        const navigate=useNavigate()
    const { original_title,genres, runtime,release_date,overview, poster_path,id} = movie
    let imageUrl=`https://image.tmdb.org/t/p/w500${poster_path}`
    console.log(movie)
  return (
    <div 
    onClick={()=>{
        navigate( `movies/${id}`)
    }}
    className=' relative bg-center bg-cover w-[320px] min-h-[200px] flex flex-col justify-between'
      style={{
         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`
      }}
    >
       <div className='flex flex-col bg-red-400 absolute w-full bottom-0 '>
          <span className='text-white text-[15px]'>{original_title}</span>
          <span className='text-white'>{release_date}</span>
       </div>
    </div>
  )
}

export default MovieCard
