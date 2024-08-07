import {TailSpin, CirclesWithBar} from "react-loader-spinner"
export const LoaderCom = () => {
    return (
        <div className="flex items-center  h-screen w-[100%]">
            <TailSpin height="80" width="100" radius="9" color="green" ariaLable="loading"/>
        </div>
    )
}

export const CircleLoader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <CircleLoader height="80" width="80" radius="9" color="green" ariaLable="loading"/>
        </div>
    )
}