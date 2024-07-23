import LandingPage from "./page/landingPage/landingPage"
import FeaturedMovie from "./page/moviePage/MoviePage"
import SelectionBottons from "./components/selectionBottons"

import { Sidebar } from "./components/sideBarComponent/sideBar"
import { Header } from "./components/headerComponent/header"
import { Outlet } from "react-router-dom"


// import { MyContextProvider } from "./components/ContextProvider"
const Root = () => {
    return (
        <div >
            <Header/>
            <div className="flex">
               <Sidebar/>
                <div className="mt-10 md:mt-20  md:ml-[150px] w-full min-h-[600px]">
                  <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Root