import './TopRatedHome.css'
import PopularCard from '../PopularCard/PopularCard'
import { useContext } from 'react'
import { TopRatedContext } from '../../context/TopRatedContext'

const TopRatedHome = () => {
  const {data,error,loading} = useContext(TopRatedContext)



  if(loading){
    <div>loading</div>
  }
  if(error){
    <div>error</div>
  }
  return (
    <div className='mt-4 p-4'>
      <div className='flex justify-between items-center p-4 '>
        <h1 className='text-2xl uppercase'>Top Rated</h1>
        <p className="cursor-pointer text-gray-400 flex items-center">View all <span className="material-icons text-sm ml-2">arrow_forward_ios</span></p>
      </div>
      <hr />
      <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4'>
        {
          data && data?.slice(0,6).map((secData)=>{
            return (
              
                <PopularCard secData = {secData} key={secData.id}/>
              
            )
          })
        }
      </div>
    </div>
  )
}

export default TopRatedHome
