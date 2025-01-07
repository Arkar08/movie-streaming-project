import { useContext } from "react"
import PopularCard from "../PopularCard/PopularCard"
import { ActionContext } from "../../context/ActionContext"


const ActionMovieHome = () => {
  const {action,error,loading} = useContext(ActionContext)

  
  if(error){
    return <div>{error}</div>
  }

  if(loading){
    return <div>loading</div>
  }

  return (
    <div className='mt-4 p-4'>
    <div className='flex justify-between items-center p-4 '>
      <h1 className='text-2xl uppercase'>Action Movies</h1>
      <p className="cursor-pointer text-gray-400 flex items-center">View all <span className="material-icons text-sm ml-2">arrow_forward_ios</span></p>
    </div>
    <hr />
      <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4'>
        {
          action && action?.slice(0,6).map((action)=>{
            return     <PopularCard secData={action} key={action.id}/>
          })
        }
      </div>
  </div>
  )
}

export default ActionMovieHome
