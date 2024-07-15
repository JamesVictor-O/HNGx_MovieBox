import "../index.css"
import { useContext } from "react"
import { MyContext } from "./ContextProvider"
import { ReactComponent as SearchIcon} from "../../src/assets/Search.svg"
const SearchBox = () => {
    const {setSearch,search}=useContext(MyContext)

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    const handleSearch=()=>{
        console.log(search.toLowerCase())
    }
    return (
        <div className="w-[70%] md:w-[45%] border-red border rounded-lg flex flex-row items-center md:relative md:mb-0">
            <input
                type="text"
                className=" outline-none p-1 md:p-1 text-white h-[100%]  rounded-lg md:rounded w-[95%] md:w-[95%] bg-transparent "
                placeholder="What Do You Want To Watch?"
               onChange={handleChange}

            />
            <div onClick={handleSearch} className="mr-3">
              <SearchIcon />
            </div>
        </div>
    )
}

export default SearchBox;