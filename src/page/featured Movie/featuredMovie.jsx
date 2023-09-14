import { MyContext } from "../../components/ContextProvider"
import { CircleLoader } from "../../components/loader"

import Card from "../../components/card"
import { useContext } from "react"
const FeaturedMovie = () => {
    const {filterMovies,error}=useContext(MyContext)
      console.log(error)
    return (
        <div>
             {
        error ? 
            <div className="flex justify-center items-center py-12">
                <h2 className="text-red-900">Seems to be having Network issues !!</h2>
            </div>
         : 
                <div className="p-10 flex flex-col justify-center items-center">
                    <header className="flex flex-row justify-between items-center w-[88%]">
                        <h2>Featured Movie</h2>
                        <span>See more</span>
                    </header>
                    <section className=" grid grid-cols-2 md:grid-cols-4 mt-5 gap-6">
                        {filterMovies.map(movie => (
                            <Card key={movie.id} movie={ movie } />
                        )
                        )}
                    </section>
                        
                </div>
            
    }
        </div>
    )
}
export default FeaturedMovie