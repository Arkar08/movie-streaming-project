import { createContext, useEffect, useState } from "react";
import ApiConfig from '../utils/ApiConfig'

// eslint-disable-next-line react-refresh/only-export-components
export const ActionContext = createContext()


// eslint-disable-next-line react/prop-types
export const ActionProvider = ({children}) =>{
    const [action,setAction] = useState([])
    const [comedy,setComedy] = useState([])
    const [error, setError] = useState(null)
    const [loading , setLoading ] = useState(false)
    const [anime , setAnime] = useState([])

    
    const getData = async() =>{
        setLoading(true)
        try {
            await ApiConfig.get('/movie/now_playing?language=en-US&page=2').then((res)=>{
                const data = res.data.results;
                const mainData = data.filter((secData)=>{
                    if(secData.genre_ids.includes(28) && !secData.genre_ids.includes(16)){
                        return secData;
                    }
                })
                const mainData2 = data.filter((secData)=>{
                    if(secData.genre_ids.includes(35) && !secData.genre_ids.includes(16)){
                        return secData;
                    }
                })
                const mainData3 = data.filter((secData)=>{
                    if(secData.genre_ids.includes(16)){
                        return secData;
                    }
                })

                setAction(mainData)
                setComedy(mainData2)
                setAnime(mainData3)
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


    return <ActionContext.Provider value={{action,comedy,error,loading,anime}}>
        {children}
    </ActionContext.Provider>
}