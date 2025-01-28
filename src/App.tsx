import { Outlet } from "react-router-dom"
import Navbar from "./components/homepagecomponents/Navbar"
import Footer from "./components/homepagecomponents/Footer"


function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
