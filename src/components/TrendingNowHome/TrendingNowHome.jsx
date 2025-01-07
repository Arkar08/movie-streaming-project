
import { useContext } from 'react'
import {TrendingContext} from '../../context/TrendingContext'
import CardHover from '../Card/CardHover'
import './TrendingNowHome.css'

const TrendingNowHome = () => { 
  const {trending , error , loading }  = useContext(TrendingContext)

  if(error){
    return <div>{error}</div>
  }

  if(loading){
    return <div>loading</div>
  }
  return (
    <div className='mt-4 p-4'>
      <div className='flex justify-between items-center p-4 '>
        <h1 className='text-2xl uppercase'>Trending Now</h1>
        <p className="cursor-pointer text-gray-400 flex items-center">View all <span className="material-icons text-sm ml-2">arrow_forward_ios</span></p>
      </div>
      <hr />
        <div className='grid lg:grid-cols-5 md:grid-cols-4 gap-4 p-4'>
          {
            trending && trending?.slice(0,5).map((data)=>{
              return  <CardHover secData={data} key={data.id}/>
            })
          }
        </div>
    </div>
  )
}

export default TrendingNowHome
