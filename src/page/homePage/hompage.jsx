import AboutPage from "../aboutPage/aboutPage"
import { useParams } from "react-router-dom"
import { Sidebar } from "../../components/sideBarComponent/sideBar"

const HomePage = () => {
    let { id } = useParams()
    return (
            <div className="absolute w-[90%] right-0">
                <AboutPage id={ id } />
            </div>
    )
}

export default HomePage;