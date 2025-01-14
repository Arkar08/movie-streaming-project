import { useContext } from 'react'
import PopularCard from '../PopularCard/PopularCard'
import './PopularSeriesHome.css'
import { PopularSeriesContext } from '../../context/PopularSeriesContext'
import { useNavigate } from 'react-router'
const PopularSeriesHome = () => {

    const {popularData,error , loading} = useContext(PopularSeriesContext)
    const navigate = useNavigate()

    const View = () =>{
      navigate('/series')
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
      <h1 className='text-2xl uppercase'>Popular Series</h1>
      <p className="cursor-pointer text-gray-400 flex items-center" onClick={View}>View all <span className="material-icons text-sm ml-2">arrow_forward_ios</span></p>
    </div>
    <hr />
      <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4'>
        {
          popularData && popularData?.slice(0,12).map((data)=>{
            return <PopularCard secData={data} key={data.id}/>
          })
        }
      </div>
  </div>
  )
}

export default PopularSeriesHome
