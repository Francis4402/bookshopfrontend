import { Pagination, Slider } from "antd"
import AllBooks from "../../components/homepagecomponents/AllBooks"
import { FaSearch } from "react-icons/fa"


const AllProducts = () => {
  return (
    <div>
        <div className="lg:h-[400px] md:h-[200px] w-full bg-[url('/eventstopimage.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="text-white lg:h-[400px] md:h-[200px] bg-black/40 flex flex-col gap-5 justify-center items-center">
              <p className="text-xl font-semibold">PRODUCTS</p>
              <h1  className="md:text-4xl text-2xl font-serif">Shop List</h1>
          </div>
        </div>

        <div className="container mx-auto justify-center items-center md:px-0 px-5">
            <div className="flex justify-between items-center my-20">
                <p className="font-serif text-gray-500">Showing 1-12 of 53 results</p>

                <div>menu</div>
            </div>

            <AllBooks/>

            <div className="flex justify-center items-center mb-20">
                <Pagination defaultCurrent={1} total={50} />
            </div>

            <div className="relative">
                <input
                    type="text"
                    className="border w-full py-3 px-5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
                />
                <FaSearch
                    size={18}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
            </div>

            <div className="my-10 flex flex-col gap-5">
                <h1 className="text-xl">Filter By Price</h1>
                <Slider defaultValue={30} tooltip={{ open: true }} />
                <div className="flex justify-between items-center">
                    <p>Price: $0 --- $120</p>
                    <p>FILTER</p>
                </div>
                <div className="border-b-1 border-gray-300"></div>
                
                <p className="text-xl font-serif">Top 5 of the week</p>
                
                <div className="border-b-1 border-gray-300"></div>

                <p className="text-xl font-serif">Categories</p>

                <div className="flex flex-col gap-5 text-gray-400">
                    <p>ACTION</p>
                    <p>ART</p>
                    <p>BEST SELLERS</p>
                    <p>DESIGN</p>
                    <p>FANTASY</p>
                    <p>HISTORY</p>
                    <p>HOME</p>
                    <p>LOVE STORIES</p>
                    <p>NEW</p>
                </div>

                <div className="border-b-1 border-gray-300"></div>

                <p className="text-xl font-serif">Get on the list</p>

                <input
                    type="text"
                    className="border w-full py-3 px-5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
                    placeholder="Email"
                />

                <button className="bg-red-500 hover:bg-red-400 duration-200 py-3 text-white">SUBSCRIBE</button>

                <div className="border-b-1 border-gray-300"></div>

                
            </div>
        </div>
    </div>
  )
}

export default AllProducts