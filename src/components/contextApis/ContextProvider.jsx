import { useState, createContext,useEffect} from "react";

export const MyContext=createContext()
export const MyContextProvider =({children}) => {
    let [movies, setMovies] = useState([])
    const [isOpenNavBar, setIsOpenNavBar]=useState(false)
    const [isLoading, setIsLoading]=useState(true)
    const [search, setSearch] = useState("");
    const [error, setError] = useState(true)
    const [swichPage, setSwichpage]=useState(false)
    
    const apiKey = import.meta.env.VITE_API_KEY
    const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
  useEffect(() => {
    fetch(url)
        .then(reponse => reponse.json()).then(data => {
            setError(false)
            return setMovies(data.results) 
        }).catch(err => console.log(err))

        console.log(movies)
  }, [])
    const searchMovies = movies.filter(movie => (
        movie.title.toLowerCase().includes(search.toLowerCase())
    ))
    const filterMovies = movies.slice(0, 10)
    
    return (
        <MyContext.Provider value={{filterMovies, setSearch,search, isLoading, error,setSwichpage,swichPage,isOpenNavBar, setIsOpenNavBar}}>
            {children}
        </MyContext.Provider>
    )
}