import { useNavigate } from "react-router-dom"
const Card = ({ movie }) => {
    const {id, poster_path, name, first_air_date } = movie
    let navigate = useNavigate();
    let imageUrl=`https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div className=" w-[250px]" data-testid="movie-card" onClick={()=>{
            navigate( `movies/${id}`)
        }}>
            <img alt="movie name" className="w-[100%]" data-testid="movie-poster" src={imageUrl} />
            <h2 data-testid="movie-title" className="text-[12px] font-bold text-black mt-2">{ name}</h2>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center mt-2">
                    <img src="../../src/assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png" />
                    <span className="pl-1">86.0/100</span>
                </div>
                <div className="flex flex-row items-center">
                    <img src="../../src/assets/PngItem_1381056 1.jpg" className="pr-1" />
                    <span>97%</span>
                </div>
            </div>
            <p data-testid="movie-release-data" className="text-[14px] mt-2">released-On:{ first_air_date}</p>
        </div>
    )
}
export default Card