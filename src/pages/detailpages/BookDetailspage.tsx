import { useParams } from "react-router-dom"
import { useGetSingleBookQuery } from "../../redux/features/books/bookManagementApi"
import { TBookstypes } from "../../types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Card } from "antd";
import RelatedProductcard from "./RelatedProductcard";
import AdditionalInformation from "./AdditionalInformation";
import Reviews from "./Reviews";
import { useState } from "react";


const BookDetailspage = () => {

  const {id} = useParams<{id: string}>();

  const {data: bookData} = useGetSingleBookQuery(id ?? '') as { data: TBookstypes[] | undefined };

  const book = bookData?.[0];

  const [activeTab, setActiveTab] = useState('additional');


  return (
    <div>

        <div className="lg:h-[400px] md:h-[300px] h-[200px] w-full bg-[url('/eventstopimage.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="text-white lg:h-[400px] md:h-[300px] h-[200px] bg-black/40 flex flex-col gap-5 justify-center items-center">
                <p className="text-xl font-semibold">PRODUCTS</p>
                <h1 className="md:text-4xl text-2xl font-serif">Shop List</h1>
            </div>
        </div>


        <div className="container max-w-5xl mx-auto justify-center items-center md:px-0 px-5 my-28">
            <div className="flex lg:flex-row flex-col gap-20 items-start">

                <LazyLoadImage
                    effect="blur"
                    src={book?.bookImage}
                    alt="Book Cover"
                    className="lg:w-[600px] w-full h-auto"
                />


                <div className="flex flex-col gap-5 w-full">
                    <p className="text-lg text-gray-500">{book?.author}</p>
                    <h1 className="text-4xl font-serif">{book?.title}</h1>
                    <p className="text-lg">Price: {book?.price} tk</p>
                    <p className="text-gray-500">{book?.description}</p>


                    {book?.inStock === true ? (
                        <div>
                            <Button>Buy Book</Button>
                        </div>
                    ) : (
                        <div>
                            <Button disabled>Out of Stock</Button>
                        </div>
                    )}

                    <p className="text-gray-500">Categories: {book?.category}</p>
                    

                    <Card className="w-full">
                        <div className="flex gap-5 items-start">
                          <LazyLoadImage
                              effect="blur"
                              src="/authorimage1.png"
                              alt="Author"
                              className="w-96 rounded-full"
                          />
                          <div className="flex flex-col gap-2">
                            <p>{book?.author}</p>
                            <h1 className="text-2xl font-serif">{book?.title}</h1>
                            <p>With decades of maintenance of way expertise and experience, no one knows the rail like Loram. Today, with our Loram Technologies business group, we’re leveraging our accumulated data, analytics and maintenance algorithms with advanced inspection technologies to provide you actionable intelligence with real-time monitoring and the most precise application of maintenance of way activities. In this new era of digital insight, interval-based maintenance is a thing of the past. Loram delivers on the promise of truly targeted, agile and data-driven solutions, offering unsurpassed efficiency, predictability and return on your maintenance investment.</p>
                          </div>
                        </div>
                    </Card>

                    
                </div>
            </div>


            <div className="flex flex-col justify-center items-center gap-10 mt-20">

                <div className="flex md:flex-row flex-col justify-center items-center gap-5">
                    <button
                        className={`border border-gray-200 hover:bg-black hover:text-white duration-200 px-10 py-3 font-serif ${
                            activeTab === "additional" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setActiveTab("additional")}
                    >
                        Additional Information
                    </button>
                    <button
                        className={`border border-gray-200 hover:bg-black hover:text-white duration-200 px-10 py-3 font-serif ${
                            activeTab === "reviews" ? "bg-black text-white" : ""
                        }`}
                        onClick={() => setActiveTab("reviews")}
                    >
                        Reviews (0)
                    </button>
                </div>


                <div className="w-full">
                    {activeTab === "additional" && <AdditionalInformation />}
                    {activeTab === "reviews" && <Reviews />}
                </div>


                <h1 className="text-2xl">Related Products</h1>
                <div className="border-b-1 border-gray-300 w-full"></div>
            </div>

  
            <RelatedProductcard />
        </div>
    </div>
  )
}

export default BookDetailspage