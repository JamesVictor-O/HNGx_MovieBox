import { ReactComponent as Facebook } from "../../src/assets/facebook.svg"
import { ReactComponent as Twitter } from "../../src/assets/twitter.svg"
import { ReactComponent as Instagram } from "../../src/assets/instagram.svg"
import { ReactComponent as Youtube } from "../../src/assets/youtube.svg"

export const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-10">
            <div className="flex flex-row justify-between  w-[20%]">
                <Facebook className="w-[17px]"/>
                <Twitter className="w-[17px]"/>
                <Instagram className="w-[17px]"/>
                <Youtube className="w-[17px]"/>
               
            </div>
            <div className="flex justify-between w-[30%] my-2">
              <span className="font-bold">Conditions of Use</span>
              <span className="font-bold">Privacy & Policy</span>
              <span className="font-bold">Press Room</span>
            </div>

            <div className="mt-2">@ 2021 MovieBox by Adriana Eka Prayudha</div>
        </div>
    )
}