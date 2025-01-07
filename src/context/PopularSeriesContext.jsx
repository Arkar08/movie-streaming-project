
import { createContext, useEffect, useState } from "react";
import ApiConfig from '../utils/ApiConfig'

// eslint-disable-next-line react-refresh/only-export-components
export const PopularSeriesContext = createContext()

// eslint-disable-next-line react/prop-types
export const PopularSeriesProvider = ({children})=>{
    const [popularData,setPopularData] = useState([])
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(null)

    const getData  = async()=>{
        setLoading(true)
        try {
            await ApiConfig.get('tv/popular?language=en-US&page=1').then((res)=>{
                setPopularData(res.data.results)
                setLoading(false)
            }).catch((error)=>{
                setError(error)
                setLoading(false)
            })
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(()=>{
        getData()
    },[])


    return <PopularSeriesContext.Provider value={{popularData,loading,error}}>
        {children}
    </PopularSeriesContext.Provider>
}