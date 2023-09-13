import { useState, createContext,useEffect} from "react";

export const MyContext=createContext()
export const MyContextProvider =({children}) => {
    let [movies, setMovies]=useState([])
    let apiKey = "3ee590547c6286425382a40bab207116"

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then(reponse => reponse.json()).then(data => setMovies(data.results)).catch(err => console.log(err))
  }, [])
    
    const filterMovies = movies.slice(0, 10)

//    const value = {
//        filterMovies: filterMovies
//     }
    
    return (
        <MyContext.Provider value={{filterMovies}}>
            {children}
        </MyContext.Provider>
    )
}