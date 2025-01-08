import { Carousel,Button } from '@material-tailwind/react'
import './CarouselImage.css'
import { useContext } from 'react'
import { PopularMoviesContext } from "../../context/PopularMoviesContext"

const CarouselImage = () => {

  const {movies} = useContext(PopularMoviesContext)
  const allMovie = movies && movies.slice(2,5)

  return (
        <Carousel className="rounded-xl h-full w-full">
          {
            allMovie && allMovie.map((movie)=>{
              return(
                <div className='mainImages'  key={movie.id}>
                  <div className='carouselText'>
                    <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
                    <p className="text-white text-wrap">{movie.overview}</p>
                    <Button color='purple' className='mt-20'>Watch Now</Button>
                  </div>
                  <div className='cardImageContainer'>
                      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="posterImage" className='cardImage'/>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="image 1"
                    className="images"
                  />
                </div>
              )
            })
          }
        </Carousel>

  )
}

export default CarouselImage
