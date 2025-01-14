import { useContext } from "react"
import PopularCard from "../PopularCard/PopularCard"
import { ActionContext } from "../../context/ActionContext"
import { useNavigate } from "react-router"


const AnimeHome = () => {

    const {anime,error,loading} = useContext(ActionContext)
    const navigate = useNavigate()

    const View = () =>{
      navigate('/anime')
    }

    
    if(error){
      return <div>{error}</div>
    }
  
    if(loading){
      return <div>loading</div>
    }
  
  return (
    <div className='mt-4 p-4'>
    <div className='flex justify-between items-center p-4 '>
      <h1 className='text-2xl uppercase'>Anime</h1>
      <p className="cursor-pointer text-gray-400 flex items-center" onClick={View}>View all <span className="material-icons text-sm ml-2">arrow_forward_ios</span></p>
    </div>
    <hr />
      <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4'>
        {
          anime && anime?.map((data)=>{
            return  <PopularCard key={data.id} secData={data}/>
          })
        }
      </div>
  </div>
  )
}

export default AnimeHome
