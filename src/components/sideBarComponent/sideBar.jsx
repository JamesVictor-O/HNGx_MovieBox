import {NavLink} from "react-router-dom"
import "../../index.css"
import  HomeIcon from '../../assets/Home.svg'
import Movies from '../../assets/Movie.svg'
import  Tv  from '../../assets/Show.svg'
import LogOut from '../../assets/Logout.svg'
import Log from '../../assets/tv.svg'
import Calender from '../../assets/Calendar.svg'
import CustomButton from "../customButtonComponent/customButton"
// import { ReactComponent as Logo } from '../assets/Logo.svg'

export const Sidebar = () => {
    return (
       <div className="hidden md:fixed md:flex w-[10%] border-r overflow-hidden h-full rounded-sm md:rounded-2xl  md:max-w-[226px] min-h-[982px]">
           <div className="flex  items-center flex-col bg-white h-full">
                <div className=" w-[100%] h-[30%] flex mt-[120px] flex-col py-6 justify-between items-center">
                    <NavLink to="/">
                        <div className="flex items-center cursor-pointer ">
                            <img alt="home" src={HomeIcon} />
                            <span className=" hidden md:flex font-sans font-bold text-[1.1rem] ml-3">Home</span>
                        </div>
                    </NavLink>
                    <NavLink to="movie">
                        <div className="flex items-center cursor-pointer ">
                            <img  className="" alt="home" src={Movies} />
                            <span className="hidden md:flex font-sans font-bold text-[1.1rem] ml-3">Movies</span>
                        </div>
                    </NavLink>
                    <div className="flex items-center cursor-pointer ">
                        <img alt="home" className="text-red-300" src={Tv} />
                        <span className="hidden md:flex font-sans font-bold text-[1.1rem] ml-3">Tv Series</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <img alt="home" className="text-red-300" src={Calender} />
                        <span className="hidden md:flex font-sans font-bold text-[1.1rem] ml-3">Tv Series</span>
                    </div>
                </div>
            
                <div className="hidden md:flex justify-center items-center border border-red-200 p-2 rounded-2xl flex-col mt-8">
                    <h2 className="font-bold">Play movie quizes and earn free tickets</h2>
                    <p>50k people are playing now</p>
                    <CustomButton style={{backgroundColore:"red", color:"white", padding:"4px", borderRadius:"30px",fontSize:"11px", cursor:"pointer"}}>
                        Start playing
                    </CustomButton>
                </div>
                <div className="flex mt-16 items-center w-[100%]  cursor-pointer">
                    <img alt="home" src={LogOut} />
                    <span className=" hidden md:flex font-sans font-bold text-[1.1rem] ml-3 ]">Log out</span>
                </div>
           </div>
       </div>
    )
}