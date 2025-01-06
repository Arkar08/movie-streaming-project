
import CardHover from '../Card/CardHover'
import './TrendingNowHome.css'

const TrendingNowHome = () => {
  return (
    <div className='mt-4 p-4'>
      <div className='flex justify-between items-center p-4 '>
        <h1 className='text-2xl uppercase'>Trending Now</h1>
        <p className="cursor-pointer text-gray-400 flex items-center">View all <span className="material-icons text-sm ml-2">arrow_forward_ios</span></p>
      </div>
      <hr />
        <div className='grid lg:grid-cols-5 md:grid-cols-4 gap-4 p-4'>
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
          <CardHover />
        </div>
    </div>
  )
}

export default TrendingNowHome
