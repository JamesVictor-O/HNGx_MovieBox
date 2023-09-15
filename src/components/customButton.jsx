const CustomButton = ({children,style}) => {
    return (
        <button
            className=" flex flex-row items-center justify-between rounded p-1 mt-4"
            style={style}
        >
         {children}
        </button>
    )
}
export default CustomButton;