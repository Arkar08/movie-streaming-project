
import CarouselImage from "../../components/Carousel/CarouselImage"
import './Home.css'
import TrendingNowHome from "../../components/TrendingNowHome/TrendingNowHome"
import TopRatedHome from "../../components/TopRatedHome/TopRatedHome"
import PopularSeriesHome from "../../components/PopularSeriesHome/PopularSeriesHome"
import NewReleaseHome from "../../components/NewReleaseHome/NewReleaseHome"
import PopularMovieHome from "../../components/PopularMovieHome/PopularMovieHome"
import ComedyMovieHome from '../../components/ComedyMovieHome/ComedyMovieHome'
import ActionMovieHome from '../../components/ActionMovieHome/ActionMovieHome'
import AnimeHome from '../../components/AnimeHome/AnimeHome'




const Home = () => {

  return (
    <div className="homeContainer">
      <CarouselImage />
        <TrendingNowHome />
        <NewReleaseHome />
        <TopRatedHome />
        <PopularSeriesHome />
        <PopularMovieHome />
        <ComedyMovieHome />
        <ActionMovieHome />
        <AnimeHome />
    </div>
  )
}

export default Home
