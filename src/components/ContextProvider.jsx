import { useState, createContext,useEffect} from "react";

export const MyContext=createContext()
export const MyContextProvider =({children}) => {
    let [movies, setMovies] = useState([])
    const [error, setError]=useState(false)
    const [search, setSearch] = useState("");
    let apiKey = "3ee590547c6286425382a40bab207116"

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then(reponse => reponse.json()).then(data => setMovies(data.results)).catch(err => console.log(err), setError(true))
  }, [])
    const searchMovies = movies.filter(movie => (
        movie.title.toLowerCase().includes(search.toLowerCase())
    ))
    const filterMovies = searchMovies.slice(0, 10)
    
    return (
        <MyContext.Provider value={{filterMovies, setSearch, error}}>
            {children}
        </MyContext.Provider>
    )
}