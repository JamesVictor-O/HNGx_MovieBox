import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FavoriteIcon from "../../../src/assets/Favorite.svg"
import  Imdb  from '../../../src/assets/imdb.svg'
import Tomato from '../../../src/assets/tomato.svg'

const SeriesCard = ({series}) => {
    const {id, poster_path,name,first_air_date,vote_average} = series
    const [isClicked, setIsClicked]=useState(false)
    const handleChange = (e) => {
        e.stopPropagation()
        setIsClicked(!isClicked)
      }

    let navigate = useNavigate();
    const imageUrl=`https://image.tmdb.org/t/p/w500${poster_path}`
  return (
    <div className=" w-[] md:w-[250px] relative" data-testid="movie-card" onClick={()=>{
        navigate( `/${id}`)
    }}>
        <img alt="movie name" className="w-[100%]" data-testid="movie-poster" src={imageUrl} />
        <h2 data-testid="movie-title" className="text-[12px] font-bold text-black mt-2">{name}</h2>
        <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div className="flex flex-row items-center mt-2">
                <img src={Imdb} />
                <span className="pl-1">{vote_average.toFixed(1)}/10</span>
            </div>
            <div className="flex flex-row items-center">
                <img src={Tomato} className="pr-1" />
                <span>97%</span>
            </div>
        </div>
        <p data-testid="movie-release-date" className="text-[14px] mt-2">Aired-On:{first_air_date}</p>
        
        <img alt="favourite icon" src={FavoriteIcon}  className={`absolute top-[3%] left-[10%] rounded-3xl ${isClicked ? "bg-red-600" : ""}`} onClick={handleChange} />
        {/* <Genre genre={genre}/> */}
    </div>
  )
}

export default SeriesCard
