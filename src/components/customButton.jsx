const CustomButton = ({children}) => {
    return (
        <button className="bg-red-700 flex flex-row items-center justify-between rounded p-1 mt-4">
         {children}
        </button>
    )
}
export default CustomButton;