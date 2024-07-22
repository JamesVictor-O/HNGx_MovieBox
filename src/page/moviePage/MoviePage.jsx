import { MyContext } from "../../components/contextApis/ContextProvider"
import { CircleLoader } from "../../components/loader"
import SelectionBottons from "../../components/selectionBottons"
import Card from "../../components/CardComponent/card"
import { useContext } from "react"
const FeaturedMovie = () => {
    const {filterMovies,error,movies,swichPage}=useContext(MyContext)
    return (
        <div>
             {
        error ? 
            <div className="flex justify-center items-center py-12">
                <h2 className="text-red-900">Seems to be having Network issues !!</h2>
            </div>
         : 
                <div className="pb-10 px-2 md:p-10 flex flex-col justify-center items-center">
                    <SelectionBottons/>
                    <section className=" grid gap-3 grid-cols-2 md:grid-cols-4 mt-5 md:gap-6">
                        {(swichPage ? movies : filterMovies ).map(movie => (
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