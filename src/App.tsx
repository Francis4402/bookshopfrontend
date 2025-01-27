import { Outlet } from "react-router-dom"
import Navbar from "./components/homepagecomponents/Navbar"
import Home from "./pages/Home"
import Footer from "./components/homepagecomponents/Footer"


function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
