import { useEffect, useState } from "react";
import { createContext } from "react";
import ApiConfig from '../utils/ApiConfig'

// eslint-disable-next-line react-refresh/only-export-components
export const PopularMoviesContext = createContext()

// eslint-disable-next-line react/prop-types
export const PopularMoviesProvider = ({children}) =>{
    const [movies,setMovies]  = useState([])
    const [loading , setLoading ] = useState(false)
    const [error , setError] = useState(null)

    const getData = async() =>{
        setLoading(true)
        try {
            await ApiConfig.get('/movie/popular?language=en-US').then((res)=>{
                setMovies(res.data.results)
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

    return <PopularMoviesContext.Provider value={{movies,error,loading}}>
        {children}
    </PopularMoviesContext.Provider>
}