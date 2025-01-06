import PopularCard from "../PopularCard/PopularCard"


const ComedyMovieHome = () => {
  return (
    <div className='mt-4 p-4'>
    <div className='flex justify-between items-center p-4 '>
      <h1 className='text-2xl uppercase'>Comedy Movies</h1>
      <p className="cursor-pointer text-gray-400 flex items-center">View all <span className="material-icons text-sm ml-2">arrow_forward_ios</span></p>
    </div>
    <hr />
      <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4'>
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />

      </div>
  </div>
  )
}

export default ComedyMovieHome
