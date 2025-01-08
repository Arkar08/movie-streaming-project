import { useContext } from "react"
import { ShowContext } from "../../context/ShowContext"
import PopularCard from "../../components/PopularCard/PopularCard"
import './series.css'


const Series = () => {

  const {show} = useContext(ShowContext)

  return (
    <div className="showContainer">
      <h1 className='text-3xl'>Series ({show.length})</h1>
      <div className='cardContainers'>
        {
          show && show?.reverse().map((data)=>{
            return <PopularCard key={data.id} secData={data}/>
          })
        }
      </div>
  </div>
  )
}

export default Series
