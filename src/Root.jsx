import LandingPage from "./page/landingPage/landingPage"
import FeaturedMovie from "./page/featured Movie/featuredMovie"
import { Footer } from "./components/footer"
import HomePage from "./page/homePage/hompage"


// import { MyContextProvider } from "./components/ContextProvider"
const Root = () => {
    return (
        <div>
            <LandingPage />
            <FeaturedMovie />
            <Footer/>
            
        </div>
    )
}
export default Root