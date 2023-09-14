import "../index.css"
import { ReactComponent as LogoIcon } from '../assets/Logo.svg'
import { ReactComponent as Menu } from '../assets/Menu.svg'

import SearchBox from "../components/searchBox"

export const Header = () => {
    return (
        <div>
            <header className="flex flex-row justify-between md:relative items-center pt-4 mx-4 md:mx-8">
                <LogoIcon className="sm:w-[20%]  md:flex"/>
                <SearchBox/>
                <div className="flex flex-row items-center">
                    <span className="text-white pr-2 hidden md:flex">Sign in</span>
                    <Menu/>
                </div>
            </header>
        </div>
    )
}