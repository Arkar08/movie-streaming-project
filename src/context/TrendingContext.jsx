import { useState,useEffect } from "react";
import { createContext } from "react";
import ApiConfig from '../utils/ApiConfig'

// eslint-disable-next-line react-refresh/only-export-components
export const TrendingContext = createContext()

// eslint-disable-next-line react/prop-types
export const TrendingProvider = ({children})=>{
    const [trending , setTrending ] = useState([])
    const [error , setError ]  = useState(null)
    const [loading , setLoading] = useState(false)


    const getData = async() =>{
        setLoading(true)
        try {
            await ApiConfig.get('/trending/movie/day?language=en-US').then((res)=>{
                setTrending(res.data.results)
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

    const allData = async() =>{
        setLoading(true)
        try {
            await ApiConfig.get('/trending/all/day?language=en-US&page=2').then((res)=>{
                setTrending(prev => [...prev,...res.data.results])
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
        getData();
        allData()
    },[])


    return <TrendingContext.Provider value={{trending,error,loading}}>
        {children}
    </TrendingContext.Provider>
}