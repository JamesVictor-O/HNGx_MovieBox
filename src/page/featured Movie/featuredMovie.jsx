import { MyContext } from "../../components/ContextProvider"

import Card from "../../components/card"
import { useContext } from "react"
const FeaturedMovie = () => {
    const {filterMovies}=useContext(MyContext)
      
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <header className="flex flex-row justify-between items-center">
                <h2>Featured Movie</h2>
                <span>See more</span>
            </header>
            {/* {
                movies.map(movies => (
                    <Card/>
                ))
            } */}
            <section className=" grid grid-cols-4 mt-5 gap-9">
                {filterMovies.map(movie => (
                    <Card key={movie.id} movie={ movie } />
                )
            )}
            </section>
        </div>
    )
}
export default FeaturedMovie