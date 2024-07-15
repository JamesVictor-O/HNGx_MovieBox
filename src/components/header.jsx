import "../index.css"
import  LogoIcon from '../assets/tv.svg'
import Menu from '../assets/Menu.svg'

import SearchBox from "../components/searchBox"

export const Header = () => {
    return (
        <div>
            <header className="flex flex-row justify-between md:relative items-center pt-4 mx-4 md:mx-8">
                <div className="">
                    <img alt='logo' className="w-[80%] md:w-[100%]" src={LogoIcon}/>
                    <span className="md:flex hidden">MobileBox</span>
                </div>
                <SearchBox/>
                <div className="flex flex-row items-center">
                    <span className="text-white  pr-2 hidden md:block">Signin</span>
                    <img alt="sign out" src={Menu} className="w-[90%] md:ml-0 ml-2 md:w-[100%]"/>
                </div>
            </header>
        </div>
    )
}