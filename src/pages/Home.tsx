import AllBooks from "../components/AllBooks"
import AutoGraphysection from "../components/AutoGraphysection"
import BookPromotionEvents from "../components/BookPromotionEvents"
import Carousels from "../components/Carousel"
import CategoryButtons from "../components/CategoryButtons"
import LogoGrids from "../components/LogoGrids"
import OurServices from "../components/OurServices"
import OurservicesAuthor from "../components/OurservicesAuthor"



const Home = () => {
  return (
    <div className="container mx-auto items-center h-full lg:px-0 px-5">
        <Carousels/>
        <CategoryButtons/>
        <AllBooks/>
        <div className="bg-[url('/bgimage.png')] bg-center bg-cover bg-fixed w-full h-full">
          <OurServices/>
        </div>
        <OurservicesAuthor/>
        <AutoGraphysection/>
        <BookPromotionEvents/>
        <LogoGrids/>
    </div>
  )
}

export default Home