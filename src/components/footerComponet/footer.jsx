import { ReactComponent as Facebook } from "../../../src/assets/facebook.svg"
import { ReactComponent as Twitter } from "../../../src/assets/twitter.svg"
import { ReactComponent as Instagram } from "../../../src/assets/instagram.svg"
import { ReactComponent as Youtube } from "../../../src/assets/youtube.svg"

export const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-10">
            <div className="flex flex-row justify-between w-[60%]  md:w-[20%]">
                <Facebook className="w-[17px]"/>
                <Twitter className="w-[17px]"/>
                <Instagram className="w-[17px]"/>
                <Youtube className="w-[17px]" />
            </div>
            <div className="flex  justify-center items-center md:justify-between flex-col md:flex-row  w-[97%] md:w-[30%] my-2 mt-5 md:mt-0">
              <span className="font-bold text-[17px]">Conditions of Use</span>
              <span className="font-bold text-[17px]">Privacy & Policy</span>
              <span className="font-bold text-[17px]">Press Room</span>
            </div>

            <div className="mt-2">@ 2021 MovieBox by Adriana Eka Prayudha</div>
        </div>
    )
}