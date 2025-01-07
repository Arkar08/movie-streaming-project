import ApiConfig from '../utils/ApiConfig'
import { createContext, useEffect, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const TopRatedContext = createContext()



// eslint-disable-next-line react/prop-types
export const TopRatedProvider = ({children}) =>{
    const [data , setData] = useState([])
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(false)
    const getData = async()=>{
        try {
            setLoading(true)
                await ApiConfig.get('/movie/top_rated?language=en-US').then((res)=>{
                setData(res.data.results)
                setLoading(false)
            }).catch(error =>{
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

    return <TopRatedContext.Provider value={{data,error,loading}}>
        {children}
    </TopRatedContext.Provider>
}