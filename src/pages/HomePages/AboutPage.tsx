import { AiFillAccountBook } from "react-icons/ai"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import BookPromotionEvents from "../../components/homepagecomponents/BookPromotionEvents";
import LogoGrids from "../../components/homepagecomponents/LogoGrids";



const AboutPage = () => {
  return (
    <div>
      <div className="lg:h-[400px] md:h-[200px] w-full bg-[url('/eventstopimage.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="text-white lg:h-[400px] md:h-[200px] bg-black/40 flex flex-col gap-5 justify-center items-center">
              <p className="text-xl font-semibold">INFO</p>
              <h1  className="md:text-4xl text-2xl font-serif">About US</h1>
          </div>
      </div>
      
      <div className="flex flex-col gap-8 items-center text-center p-20 justify-center lg:max-w-4xl container mx-auto">
        <div className="flex flex-col gap-4 items-center">
            <AiFillAccountBook size={20} />
            <p className="text-gray-500">OUR SERVICES</p>
        </div>
        <h2 className="font-serif text-3xl">Welcome to our bookstore, where stories come alive! We offer a curated selection of books across genres, along with personalized recommendations to ignite your love for reading.</h2>
        <button className="border hover:border-black hover:bg-black/80 hover:text-white duration-200 px-8 py-3 mt-10">READ MORE</button>
      </div>


      <div className="container mx-auto justify-center max-w-4xl md:px-0 px-5">
          <div className="flex gap-10 justify-center items-center -mb-40">
            <LazyLoadImage alt="i" src="/bookcover/bookcover3.jpg" effect="blur" className="shadow-2xl" />
            <LazyLoadImage alt="i" src="/bookcover/bookcover4.jpg" effect="blur" className="shadow-2xl" />
          </div>
      </div>
      <div className="bg-[#2e4c6e] h-[300px]"></div>

      <div className="container mx-auto justify-center md:px-0 px-5 mt-20">
        <BookPromotionEvents />
      </div>

      
      
      <div className="bg-[url('/bookcover/artbackground.jpg')] bg-center bg-cover bg-fixed w-full h-full p-10 my-20">
        <div className="bg-white flex flex-col gap-10 font-serif md:py-20 md:px-30 lg:px-80 p-10">

            <div className="flex flex-col gap-5 justify-center items-center text-center max-w-2xl mx-auto">
              <p className="text-gray-500">SUBSCRIPTION</p>
              <h1 className="text-3xl">Get a free e-book by joining newsletter</h1>
              <p className="text-gray-500">A regular update that shares the latest releases, author insights, literary events, and exclusive recommendations. It’s a great way to stay connected with the world of stories and discover new reads.</p>
            </div>

            <div className="flex lg:flex-row flex-col gap-5">
              <input type="text" className="border border-gray-300 py-3 px-5 w-full" placeholder="Name Surname" />
              <input type="text" className="border border-gray-300 py-3 px-5 w-full" placeholder="Email" />
              <div>
                <button className="bg-red-600 px-10 py-3 text-white hover:bg-red-500 duration-200">Submit</button>
              </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto justify-center md:px-0 px-5">
        <LogoGrids/>
      </div>

    </div>
  )
}

export default AboutPage