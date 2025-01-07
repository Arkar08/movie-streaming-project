import { createContext, useEffect, useState } from "react";
import ApiConfig from '../utils/ApiConfig'

// eslint-disable-next-line react-refresh/only-export-components
export const ShowContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShowProvider = ({children})=>{
    const [show,setShow] = useState([])
    const [error,setError] = useState(null)
    const [loading , setLoading ] = useState(false)

    const getData = async() =>{
        setLoading(true)
        try {
            await ApiConfig.get('/tv/on_the_air?language=en-US').then((res)=>{
                setShow(res.data.results)
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

    const getPopular = async() =>{
        setLoading(true)
        try {
            await ApiConfig.get('/tv/popular?language=en-US').then((res)=>{
                const data = res.data.results;
                setShow(prevShow => [...prevShow,...data])
                setLoading(false)
            })
            .catch(error=>{
                setError(error)
                setLoading(false)
            })
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    const TopRated = async()=>{
        setLoading(true)
        try {
            await ApiConfig.get('/tv/top_rated?language=en-US').then((res)=>{
                const data = res.data.results;
                setShow(prevShow => [...prevShow,...data])
                setLoading(false)
            })
            .catch(error=>{
                setError(error)
                setLoading(false)
            })
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    const Today = async()=>{
        setLoading(true)
        try {
            await ApiConfig.get('/tv/airing_today?language=en-US').then((res)=>{
                const data = res.data.results;
                setShow(prevShow => [...prevShow,...data])
                setLoading(false)
            })
            .catch(error=>{
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
        getPopular()
        TopRated()
        Today()
    },[])

    return <ShowContext.Provider value={{show,loading,error}}>
        {children}
    </ShowContext.Provider>
}