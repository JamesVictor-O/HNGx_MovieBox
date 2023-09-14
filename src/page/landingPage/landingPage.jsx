
import "../../index.css"
import { ReactComponent as LogoIcon } from '../../assets/Logo.svg'
import { ReactComponent as Menu } from '../../assets/Menu.svg'
import { ReactComponent as PlayNow } from '../../assets/Play.svg'


import SearchBox from "../../components/searchBox"
import CustomButton from "../../components/customButton"

const LandingPage = () => {
    return (
        <>
            <div className="gradient-background bg-center h-screen md:h-[500px] bg-cover">
                <header className="flex flex-row justify-between items-center pt-4 mx-4 md:mx-8">
                    <LogoIcon className="sm:w-[20%]  md:flex"/>
                    <SearchBox/>
                    <div className="flex flex-row items-center">
                        <span className="text-white pr-2 hidden md:flex">Sign in</span>
                        {/* <img alt="sign in" src="../../../src/assets/List-white.png"/> */}
                        <Menu/>
                    </div>
                </header>
                <section className="mt-[25%] text-white ml-8 md:w-[25%] md:mt-[6%]">
                    <h2 className="text-[20px] md:text-[40px]">JOHN WICK 3: Parabellum</h2>
                    <div className="flex flex-row justify-between items-center w-[90%] mt-6 md:mt-0 md:w-[50%]">
                        <div className="flex flex-row items-center justify-between">
                            <img alt="imdb" src="../../../src/assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png"/>
                            <span>860/100</span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <img alt="tomato" src="../../../src/assets/PngItem_1381056 1.jpg"/>
                            <span>90%</span>
                        </div>
                    </div>
                    <p className="text-left text-[16px] md:mt-0 mt-4">John wick is on the run after killing a member of the international assassin's guild and with a $14 million price tag on his head, he is the target of every hit man and woman</p>
                    <div className="mt-[15%] md:">
                        <CustomButton>
                            <PlayNow />
                            <span className="text-[13px]">WATCH TRAILER</span>
                        </CustomButton>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LandingPage