import React from 'react'
import "../../../index.css"
import { ReactComponent as PlayNow } from '../../../assets/Play.svg'
import  Imdb  from '../../../assets/imdb.svg'
import  Tomato  from '../../../assets/tomato.svg'




import CustomButton from "../../../components/customButtonComponent/customButton"


const Poster = () => {
  return (
    <div className="gradient-background bg-center  md:h-[300px] bg-cover max-w-[800px] rounded-[20px]">
        <section className=" text-white ml-8 md:max-w-[404px] min-h-[285px]  md:mt-[3%] flex flex-col justify-center">
            <h2 className="text-[20px] md:text-[40px]">JOHN WICK 3: Parabellum</h2>
            <div className="flex flex-row justify-between items-center w-[90%] mt-6 md:mt-0 md:w-[50%]">
                <div className="flex flex-row items-center justify-between">
                    <img alt="imdb" src={Imdb } />
                    <span>860/100</span>
                </div>
                <div className="flex flex-row items-center bg-white justify-between">
                    <img alt="tomato" src={ Tomato} />
                    <span>90%</span>
                </div>
            </div>
            <div className="max-w-[302px] min-h-[70px] md:mt-4 mt-4">
            <p className="text-left text-[16px]  leading-[18px] font-medium">John wick is on the run after killing a member of the international assassin's guild and with a $14 million price tag on his head, he is the target of every hit man and woman</p>
            </div>
            <div className="mt-[15%] md:mt-2">
                <CustomButton style={{backgroundColor:"red"}}>
                    <PlayNow />
                    <span className="text-[13px]">WATCH TRAILER</span>
                </CustomButton>
            </div>
        </section>
    </div>
  )
}

export default Poster
