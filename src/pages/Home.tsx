import AllBooks from "../components/homepagecomponents/AllBooks"
import AutoGraphysection from "../components/homepagecomponents/AutoGraphysection"
import BookPromotionEvents from "../components/homepagecomponents/BookPromotionEvents"
import Carousels from "../components/homepagecomponents/Carousel"
import CategoryButtons from "../components/homepagecomponents/CategoryButtons"
import LogoGrids from "../components/homepagecomponents/LogoGrids"
import OurServicesSection from "../components/homepagecomponents/OurServices"
import OurservicesAuthor from "../components/homepagecomponents/OurservicesAuthor"



const Home = () => {
  return (
    <div className="container mx-auto items-center h-full lg:px-0 px-5">
        <Carousels/>
        <CategoryButtons/>
        <AllBooks/>
        <div className="bg-[url('/bgimage.png')] bg-center bg-cover bg-fixed w-full h-full">
          <OurServicesSection/>
        </div>
        <OurservicesAuthor/>
        <AutoGraphysection/>
        <BookPromotionEvents/>
        <LogoGrids/>
    </div>
  )
}

export default Home