import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"


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
