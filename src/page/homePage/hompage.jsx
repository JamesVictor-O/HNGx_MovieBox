import { Sidebar } from "../../components/sideBar"
import AboutPage from "../aboutPage/aboutPage"
import { useParams } from "react-router-dom"
const HomePage = () => {
    let { id } = useParams()
    return (
        <div className="flex w-[100%]">
            <Sidebar />
            <div className=" w-[100%]">
                <AboutPage id={ id } />
            </div>
        </div>
    )
}

export default HomePage;