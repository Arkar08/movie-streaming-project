import { Outlet } from "react-router"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import './Main.css'
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"


const Main = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`main ${theme}`}>
      <div className="header">
        <Navbar />
      </div>
      <div className="middle">
        <Outlet/>
        <Footer />
      </div>
    </div>
  )
}

export default Main
