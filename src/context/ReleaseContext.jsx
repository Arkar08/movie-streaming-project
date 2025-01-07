import { createContext, useEffect, useState } from "react";
import ApiConfig from '../utils/ApiConfig'

// eslint-disable-next-line react-refresh/only-export-components
export const ReleaseContext = createContext()


// eslint-disable-next-line react/prop-types
export const ReleaseProvider = ({children}) =>{
    const [release,setRelease] = useState([])
    const [error , setError] = useState(null)
    const [loading , setLoading ]  = useState(false)
    const [releaseDate, setReleaseDate] = useState({})


    const getData  = async() =>{
        setLoading(true)
        try {
            await ApiConfig.get('/movie/upcoming?language=en-US').then((res)=>{
                setRelease(res.data.results)
                setReleaseDate(res.data.dates)
                setLoading(false)
            }).catch(error=>{
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

    return <ReleaseContext.Provider value={{release,releaseDate,error,loading}}>
        {children}
    </ReleaseContext.Provider>
}