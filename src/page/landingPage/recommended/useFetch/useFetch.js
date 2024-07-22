import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [recomendedvideos,setrecommendedvideos]=useState([])
    const [error,setError]=useState(false)

    useEffect(()=>{
          const fetchData=async()=>{
            try{
                const respons=await axios.get(url)
                setrecommendedvideos(respons.data.results)
                console.log(respons.data)
                setError(false)
            }catch(error){
                setError(true)
                console.log(error)
            }
          }
          fetchData()
    },[])

  return [recomendedvideos,error]
}

export default useFetch
