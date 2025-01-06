import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div>
          <h1 className='text-2xl text-center'>Movie Streaming</h1>
        </div>
        <div>
          <h1 className='text-2xl text-white mt-2 mb-2'>Useful Links</h1>
          <ul>
            <li className='link'>
              <NavLink to="/" activeClassName='actived' exact className="linkItems">Home</NavLink>
            </li>
            <li className='link'>
              <NavLink to="/movies" activeClassName='actived' className="linkItems">Movies</NavLink>
            </li>
            <li className='link'>
              <NavLink to="/shows" activeClassName='actived' className="linkItems">Tv Shows</NavLink>
            </li>
            <li className='link'>
              <NavLink to="/anime" activeClassName='actived' className="linkItems">Anime</NavLink>
            </li>
            <li className='link'>
              <NavLink to="/series" activeClassName='actived' className="linkItems">Series</NavLink>
            </li>
            <li className='link'>
              <NavLink to="/trending" activeClassName='actived' className="linkItems">Trending</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h3 className='text-xl text-white pb-2'>Address</h3>
            <hr />
            <p className='text-md text-gray-500 mt-2'>yangon</p>
          </div>
          <div className='mt-8'>
            <h3 className='text-xl text-white pb-2'>Email</h3>
            <hr />
            <p className='text-md text-red-700 mt-2'>example@gmail.com</p>
          </div>
        </div>
        <div>
          <div>
            <h3 className='text-2xl text-white pb-2'>Phone</h3>
            <hr />
            <p className='text-xl text-gray-500 mt-2'>0978927821</p>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className='text-center text-gray-500'> &copy; 2025 MovieStreaming All right reserved.</p>
      </div>
    </>
  )
}

export default Footer
