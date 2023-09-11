
import "../../index.css"
import { ReactComponent as LogoIcon } from '../../assets/Logo.svg'
import { ReactComponent as Signout } from '../../assets/Logout.svg'
import { ReactComponent as PlayNow } from '../../assets/Play.svg'
import { ReactComponent as Imdb } from '../../assets/imdb.svg'
import { ReactComponent as Tomato } from '../../assets/tomato.svg'

import SearchBox from "../../components/searchBox"
import CustomButton from "../../components/customButton"

const LandingPage = () => {
    return (
        <>
            <div className="bg-coverIm bg-center h-screen bg-cover">
                <header className="flex flex-row justify-between items-center pt-4 mx-5">
                    <LogoIcon/>
                    <SearchBox/>
                    <div className="flex flex-row items-center">
                        <span className="text-white pr-2">Sign in</span>
                        <Signout/>
                    </div>
                </header>
                <section>
                    <h2>JOHN WICK 3: Parabellum</h2>
                    <div>
                        <div>
                            <Imdb />
                            <span>860/100</span>
                        </div>
                        <div>
                            <Tomato />
                            <span>90%</span>
                        </div>
                    </div>
                    <p>John wick is on the run after killing a member of the international assassin's guild and with a $14 million price tag on his head, he is the target of every hit man and woman</p>
                    <CustomButton>
                        <PlayNow />
                        <span className="text-[13px]">WATCH TRAILER</span>
                    </CustomButton>
                </section>
            </div>
        </>
    )
}

export default LandingPage