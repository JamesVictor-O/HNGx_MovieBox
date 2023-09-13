import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../components/ContextProvider"
import { useParams } from "react-router-dom"
import { LoaderCom } from "../../components/loader"
import { ReactComponent as Play } from "../../../src/assets/Play.svg"

const AboutPage = () => {
    let { id } = useParams()
    const [movie, setMovies]=useState({})
    let apiKey = "3ee590547c6286425382a40bab207116"
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        .then(reponse => reponse.json()).then(data => setMovies({...data}))
    }, [id, apiKey])
    
    const { original_title, runtime,release_date,overview, poster_path} = movie

    console.log(movie)
    let imageUrl=`https://image.tmdb.org/t/p/w500${poster_path}`

    const year= new Date(release_date).getFullYear()
    const hour = Math.floor(runtime / 60)
    const minutes = runtime % 60;
    const inlineStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        width: `96%`,
        hight:`400px`
    }
    
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setIsLoading(true)
        }, 3000)
        return ()=> clearTimeout(timeOutId)
    },[])
    return (
        <div>
            
            {
            !isLoading ? <LoaderCom /> :
                    <div>
                        <div className="bg-red-400 relative h-[500px] flex flex-col items-center justify-center rounded ml-5 mt-5" style={inlineStyle}>
                            <span className="text-white text-[25px] font-bolder">Watch Trailer</span>
                            <Play className="w-[90px]" />
                        </div>
                        
                        <div className="flex flex-row  items-center content-center p-4">
                            <h2 data-testid="movie-title" className="text-[11px] md:text-[16px] font-bold text-black">{original_title}</h2>
                            <ul className="flex flex-row items-center list-disc ml-6">
                                    <li data-tedtid="movie-release-date" className="">{year}</li>
                                    <li  data-testid="movie-runtime" className="ml-6">{hour}h { minutes}m</li>
                            </ul>
                        </div>
                        
                        <p data-testid="movie-overview" className="text-[14px] md:w-[70%] pl-5">released-On:{overview}</p>

                        <div className="ml-5 mt-8">
                            <div className="flex flex-row items-center mb-3">
                                <span>Director: </span>
                                <p className="ml-2 text-red-700">Joseph Kosinski</p>
                            </div>
                            <div className="flex flex-row items-center mb-3">
                                <span>Writers: </span>
                                <p className="ml-2 text-red-700">Jim Cash, Jack Epps jr, peter Criag</p>
                            </div>
                            <div className="flex flex-row items-center mb-3">
                                <span>Stars: </span>
                                <p className="ml-2 text-red-700">Tom Cruise, Jennifer Connelly, Miles Teller</p>
                            </div>
                        </div>
                   </div>
            }
        </div>
    )
}
export default AboutPage;