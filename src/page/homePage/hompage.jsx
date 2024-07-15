import { Sidebar } from "../../components/sideBar"
import AboutPage from "../aboutPage/aboutPage"
import { useParams } from "react-router-dom"
const HomePage = () => {
    let { id } = useParams()
    return (
        <div className="rlative w-[100%]">
            <Sidebar />
            <div className="absolute w-[90%] right-0">
                <AboutPage id={ id } />
            </div>
        </div>
    )
}

export default HomePage;