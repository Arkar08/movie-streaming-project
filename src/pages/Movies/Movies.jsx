
import { useContext } from 'react'
import './Movies.css'
import { PopularMoviesContext } from '../../context/PopularMoviesContext'
import {ReleaseContext} from '../../context/ReleaseContext'
import { TopRatedContext } from '../../context/TopRatedContext'
import {ActionContext} from '../../context/ActionContext'
import PopularCard from '../../components/PopularCard/PopularCard'

const Movies = () => { 
  
  const {movies} = useContext(PopularMoviesContext)
  const {release} = useContext(ReleaseContext)
  const {data} = useContext(TopRatedContext)
  const {allMovies} = useContext(ActionContext)

  const mergeData = [...movies,...release,...data,...allMovies]



  return (
    <div className="movieContainer">
      <h1 className='text-3xl'>All movies ({mergeData.length})</h1>
      <div className='cardContainer'>
        {
          mergeData && mergeData?.map((data)=>{
            return <PopularCard secData={data} key={data.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Movies
