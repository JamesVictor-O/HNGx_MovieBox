import { useState, createContext,useEffect} from "react";

export const MyContext=createContext()
export const MyContextProvider =({children}) => {
    let [movies, setMovies] = useState([])
    const [isLoading, setIsLoading]=useState(true)
    const [search, setSearch] = useState("");
    const [error, setError] = useState(true)
    // const [errorMas, serErrorMas] = useState("")
    
    const apiKey = "3ee590547c6286425382a40bab207116"

    // let getErrorMessage = (massage) => {
    //     return `our error occur due to ${massage}` 
    // }
    
    // console.log(getErrorMessage(errorMas))
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        .then(reponse => reponse.json()).then(data => {
            console.log(data)
            setError(false)
            return setMovies(data.results) 
            
        }).catch(err => console.log(err))
  }, [])
    const searchMovies = movies.filter(movie => (
        movie.title.toLowerCase().includes(search.toLowerCase())
    ))
    const filterMovies = searchMovies.slice(0, 10)
    
    return (
        <MyContext.Provider value={{filterMovies, setSearch, isLoading, error}}>
            {children}
        </MyContext.Provider>
    )
}