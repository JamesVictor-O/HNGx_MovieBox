import "../index.css"
import { useContext } from "react"
import { MyContext } from "./ContextProvider"
import { ReactComponent as SearchIcon} from "../../src/assets/Search.svg"
const SearchBox = () => {
    const {setSearch}=useContext(MyContext)

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <div className="w-[70%] md:w-[45%] border-red border rounded-lg flex flex-row items-center absolute md:relative top-[10%] md:left-0 left-[15%] md:mb-0">
            <input
                type="text"
                className=" outline-none p-1 md:p-1 text-white h-[100%]  rounded-lg md:rounded w-[95%] md:w-[95%] bg-transparent "
                placeholder="What Do You Want To Watch?"
               onChange={handleChange}

            />
            <div onClick={handleChange}>
              <SearchIcon />
            </div>
        </div>
    )
}

export default SearchBox;