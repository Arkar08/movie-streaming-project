import { useContext } from "react"
import PopularCard from "../../components/PopularCard/PopularCard"
import { TrendingContext } from "../../context/TrendingContext"
import './Trending.css'


const Trending = () => {
  const {trending} = useContext(TrendingContext)
  return (
    <div className="showContainer">
    <h1 className='text-3xl'>Trending ({trending.length})</h1>
    <div className='cardContainers'>
      {
        trending && trending.map((data)=>{
          return <PopularCard key={data.id} secData={data}/>
        })
      }
    </div>
  </div>
  )
}

export default Trending
