import "../../index.css"
import  LogoIcon from '../../assets/tv.svg'
import Menu from '../../assets/Menu.svg'

import SearchBox from "./searchBox"

export const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-[#333333]">
             <div className="flex flex-row justify-between md:max-w-[1440px] mx-auto md:min-h-[80px] md:relative items-center pt-4  md:mx-8">
                <div className="max-w-[186px] min-h-[50px] flex flex-row items-center">
                    <img alt='logo' className="w-[80%] md:w-[100%]" src={LogoIcon}/>
                    <span className="md:flex hidden ml-2 text-[25px] font-bold text-white">MobileBox</span>
                </div>
                <SearchBox/>
                <div className="flex flex-row items-center max-w-[144px] min-h-[36px]">
                    <span className="text-white  hidden md:block text-[16px] font-bold mr-3">Sign in</span>
                    <img alt="sign out" src={Menu} className=" md:ml-0 ml-2 md:w"/>
                </div>
             </div>
        </div>
    )
}