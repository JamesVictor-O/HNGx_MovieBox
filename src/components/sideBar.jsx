import "../index.css"
import  HomeIcon from '../assets/Home.svg'
import Movies from '../assets/Movie.svg'
import  Tv  from '../assets/Tv Show.svg'
import LogOut from '../assets/Logout.svg'
import Log from '../assets/Logo.svg'
import CustomButton from "./customButton"
// import { ReactComponent as Logo } from '../assets/Logo.svg'

export const Sidebar = () => {
    return (
        <div className="flex border-black border-r p-4 overflow-hidden rounded-2xl items-center flex-col w-[15%]">
            <div className="">
                <img src={Log}/>
            </div>
            <div className=" w-[100%] h-[30%] flex mt-8 flex-col py-6 justify-between">
                <div className="flex items-center ">
                    <img alt="home" src={HomeIcon} />
                    <span className=" hidden md:flex font-sans font-bold text-[1.1rem] ml-3">Home</span>
                </div>
                <div className="flex items-center ">
                    <img alt="home" src={Movies} />
                    <span className="hidden md:flex font-sans font-bold text-[1.1rem] ml-3">Movies</span>
                </div>
                <div className="flex items-center ">
                    <img alt="home" className="text-red-300" src={Tv} />
                    <span className="hidden md:flex font-sans font-bold text-[1.1rem] ml-3">Tv Series</span>
                </div>
            </div>
            
            <div className="hidden md:flex justify-center items-center border border-red-200 p-2 rounded-2xl flex-col mt-8">
                <h2 className="font-bold">Play movie quizes and earn free tickets</h2>
                <p>50k people are playing now</p>
                <CustomButton style={{backgroundColore:"red", color:"white", padding:"4px", borderRadius:"30px",fontSize:"11px"}}>
                    Start playing
                </CustomButton>
            </div>
            <div className="flex mt-16 items-center w-[100%] ">
                <img alt="home" src={LogOut} />
                <span className=" hidden md:flex font-sans font-bold text-[1.1rem] ml-3 ]">Log out</span>
           </div>
        </div>
    )
}