import LandingPage from "./page/landingPage/landingPage"
import FeaturedMovie from "./page/featured Movie/featuredMovie"
import { Footer } from "./components/footer"
import SelectionBottons from "./components/selectionBottons"


// import { MyContextProvider } from "./components/ContextProvider"
const Root = () => {
    return (
        <div>
            <LandingPage />
            <SelectionBottons/>
            <FeaturedMovie />
            <Footer/>
            
        </div>
    )
}
export default Root