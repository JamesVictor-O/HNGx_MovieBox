import "../index.css"
import { useContext } from "react"
import { MyContext } from "./ContextProvider"
const SearchBox = () => {
    const {setSearch}=useContext(MyContext)

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <div className="">
            <input
                type="search"
                className="border-white border outline-none pl-1 md:p-1 text-white rounded-lg md:rounded w-[100%] md:w-[500px] bg-transparent"
                placeholder="What Do You Want To Watch?"
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBox;