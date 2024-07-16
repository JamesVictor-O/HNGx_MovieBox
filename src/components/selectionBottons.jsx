import { useContext } from 'react'
import { MyContext } from './contextApis/ContextProvider'

const SelectionBottons = () => {
  const {swichPage, setSwichpage}=useContext(MyContext)
  return (
    <div className='flex bg-yellow justify-center align-middle'>
        <div className=' flex flex-row justify-between mt-11 w-[95%]'>
            <button onClick={e=>{setSwichpage(false)}}
             className={`p-1 hover:bg-red-300 border-b-2 rounded-lg  border-black hover:text-white  ${swichPage ?"bg-white" :"bg-red-400"}`}>
                Featured
            </button>
            <button onClick={e=>{setSwichpage(true)}} 
            className={`p-1 hover:bg-red-300 border-b-2 border-black rounded-lg hover:text-white ${!swichPage ?"bg-white" :"bg-red-400"}`}
            >
                See more
            </button>
        </div>
    </div>
  )
}

export default SelectionBottons
