import { AiFillAccountBook } from "react-icons/ai";

const OurServicesSection = () => {
  return (
    <div className="text-white bg-green-700/40 flex flex-col gap-8 items-center text-center p-20 justify-center">
        <div className="flex flex-col gap-4 items-center">
            <AiFillAccountBook size={20} />
            <p>OUR SERVICES</p>
        </div>
        <h2 className="font-serif text-3xl">Welcome to our bookstore, where stories come alive! We offer a curated selection of books across genres, along with personalized recommendations to ignite your love for reading.</h2>
        <button className="border border-gray-200 hover:border-black hover:bg-white hover:text-black duration-200 md:px-15 px-8 py-3 font-serif">READ MORE</button>
    </div>
  )
}

export default OurServicesSection