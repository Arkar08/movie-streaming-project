import { useContext } from "react"
import {ActionContext} from '../../context/ActionContext'
import './anime.css'
import PopularCard from '../../components/PopularCard/PopularCard'

const Anime = () => {

  const {anime} = useContext(ActionContext)
  return (
    <div className="showContainer">
      <h1 className='text-3xl'>Series ({anime.length})</h1>
      <div className='cardContainers'>
        {
          anime && anime?.reverse().map((data)=>{
            return <PopularCard key={data.id} secData={data}/>
          })
        }
      </div>
    </div>
  )
}

export default Anime
