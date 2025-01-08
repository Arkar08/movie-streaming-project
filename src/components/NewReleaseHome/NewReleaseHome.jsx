import { useContext } from 'react'
import {ReleaseContext} from '../../context/ReleaseContext'
import CardHover from '../Card/CardHover'
import './NewReleaseHome.css'
import { useNavigate } from 'react-router'

const NewReleaseHome = () => {
  const {error,loading,releaseDate,release} = useContext(ReleaseContext)
  const naviagate = useNavigate()

  const View = () =>{
    naviagate('/movies')
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
       <div>
        <h1 className='text-2xl uppercase text-nowrap'>New Release </h1>
        <span className='text-gray-500 text-sm'>({releaseDate.minimum} to {releaseDate.maximum})</span>
       </div>
        <p className="cursor-pointer text-gray-400 flex items-center text-nowrap" onClick={View}>View all <span className="material-icons text-sm ml-2">arrow_forward_ios</span></p>
      </div>
      <hr />
      <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4 p-4'>
        {
          release && release?.slice(0,5).map((data)=>{
            return <CardHover secData={data} key={data.id}/>
          })
        }
        </div>
    </div>
  )
}

export default NewReleaseHome
