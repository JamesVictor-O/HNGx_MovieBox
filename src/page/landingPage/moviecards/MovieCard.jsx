import React, { useEffect } from 'react'
import star from "../../../assets/Star.svg"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const MovieCard = ({movie}) => {
        const navigate=useNavigate()
    const { original_title,genres, runtime,release_date,overview, poster_path,id,vote_average} = movie
    let imageUrl=`https://image.tmdb.org/t/p/w500${poster_path}`
    
  return (
    <div 
    onClick={()=>{
        navigate( `/${id}`)
    }}
    className=' relative bg-center bg-cover md:w-[320px] w-[170px] min-h-[200px] flex flex-col justify-between rounded'
      style={{
         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})`
      }}
    >
       <div 
       className='flex  absolute w-full opacity- bottom-0 bg-gray-300 flex-row justify-between p-1'
       style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageUrl})`
     }}
       >
          <div className='flex flex-col border-r-2 w-[80%]'>
            <span className='text-white text-[11px] font-semibold'>{original_title}</span>
            <span className='text-white text-[10px]'>{release_date}</span>
          </div>
           
           <div className='flex flex-row items-center'>
              <img src={star} alt="" className='w-[20px]' />
              <span className='text-white text-[8px]'>{vote_average.toFixed(1)}</span>
           </div>
       </div>
    </div>
  )
}

export default MovieCard
