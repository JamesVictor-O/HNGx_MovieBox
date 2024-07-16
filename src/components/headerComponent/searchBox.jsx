import "../../index.css"
import { useContext } from "react"
import { MyContext } from "../contextApis/ContextProvider"
import { ReactComponent as SearchIcon} from "../../../src/assets/Search.svg"
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
        <div className="relative w-[70%] md:max-w-[525px] md:min-h-[35px] border-red border rounded-lg flex flex-row items-center md:relative md:mb-0">
            <input
                type="text"
                className=" outline-none p-1 md:p-2 text-white h-[100%]  rounded-lg md:rounded w-[100%] md:w-[95%] bg-transparent "
                placeholder="What Do You Want To Watch?"
               onChange={handleChange}

            />
            <div onClick={handleSearch} className="absolute h-[100%] flex items-center w-[40px] justify-center right-0 rounded-tb-lg rounded-tr-lg">
              <SearchIcon />
            </div>
        </div>
    )
}

export default SearchBox;