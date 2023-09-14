import { useNavigate } from "react-router-dom"
import { ReactComponent as FavoriteIcon } from "../../src/assets/Favorite.svg"
import { useState } from "react"
const Card = ({ movie }) => {
    const {id, poster_path, title, release_date } = movie
    let navigate = useNavigate();
    const imageUrl=`https://image.tmdb.org/t/p/w500${poster_path}`
    const [isClicked, setIsClicked]=useState(false)
    const handleChange = (e) => {
        e.stopPropagation()
        setIsClicked(!isClicked)
      }
    return (
        <div className=" w-[] md:w-[250px] relative" data-testid="movie-card" onClick={()=>{
            navigate( `movies/${id}`)
        }}>
            <img alt="movie name" className="w-[100%]" data-testid="movie-poster" src={imageUrl} />
            <h2 data-testid="movie-title" className="text-[12px] font-bold text-black mt-2">{title}</h2>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className="flex flex-row items-center mt-2">
                    <img src="../../src/assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png" />
                    <span className="pl-1">86.0/100</span>
                </div>
                <div className="flex flex-row items-center">
                    <img src="../../src/assets/PngItem_1381056 1.jpg" className="pr-1" />
                    <span>97%</span>
                </div>
            </div>
            <p data-testid="movie-release-date" className="text-[14px] mt-2">released-On:{release_date}</p>
             <FavoriteIcon className={`absolute top-[3%] left-[10%] text-black ${ isClicked ? "bg-red-600" : "" }`} onClick={handleChange}/>

        </div>
    )
}
export default Card