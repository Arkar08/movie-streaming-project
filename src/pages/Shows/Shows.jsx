import { useContext } from 'react'
import './Shows.css'
import { ShowContext } from '../../context/ShowContext'
import PopularCard from '../../components/PopularCard/PopularCard'

const Shows = () => {

  const {show} = useContext(ShowContext)


  return (
    <div className="showContainer">
      <h1 className='text-3xl'>TV Shows ({show.length})</h1>
      <div className='cardContainers'>
        {
          show && show?.map((data)=>{
            return <PopularCard key={data.id} secData={data}/>
          })
        }
      </div>
    </div>
  )
}

export default Shows
