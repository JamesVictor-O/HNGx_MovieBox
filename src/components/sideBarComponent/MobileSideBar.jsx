import React from 'react'
import {NavLink} from "react-router-dom"
import LogOut from '../../assets/Logout.svg'
import { useContext } from 'react'
import { MyContext } from '../contextApis/ContextProvider'
const MobileSideBar = () => {
    const {setIsOpenNavBar}=useContext(MyContext)
  return (
    <div className="md:hidden fixed  w-[80%] min-h-[90%] right-0 top-16 z-50 bg-white flex flex-col justify-between">
        <div className=" w-[100%] h-[30%] flex  flex-col py-6 items-center">
            <NavLink to="/" onClick={()=>setIsOpenNavBar(false)}>
                <div className="flex justify-center items-center cursor-pointer bg-red-400 w-28 h-10 rounded-full mb-3 text-white hover:bg-black">
                    <span className=" flex font-sans font-bold text-[1.1rem] ml-3  text-center ">Home</span>
                </div>
            </NavLink>
            <NavLink to="movie" onClick={()=>setIsOpenNavBar(false)}>
                <div className="flex justify-center items-center cursor-pointer bg-red-400 w-28 h-10 rounded-full mb-3 text-white hover:bg-black">
                    <span className="flex font-sans font-bold text-[1.1rem] ml-3">Movies</span>
                </div>
            </NavLink>
            <NavLink to='series' onClick={()=>setIsOpenNavBar(false)}>
                <div className="flex justify-center items-center cursor-pointer bg-red-400 w-28 h-10 rounded-full mb-3 text-white hover:bg-black">
                    <span className="flex font-sans font-bold text-[1.1rem] ml-3">Tv Series</span>
                </div>
            </NavLink>
        </div>

        <div className="flex mt-16 items-center justify-end w-[100%]  cursor-pointer mb-10 pr-5">
            <img alt="home" src={LogOut} />
            <span className="flex font-sans font-bold text-[1.1rem] ml-3 ]">Log out</span>
        </div>
    </div>
  )
}

export default MobileSideBar
