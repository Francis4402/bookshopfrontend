import { useParams } from "react-router-dom"
import { useGetSingleBookQuery } from "../../redux/features/books/bookManagementApi"
import { TBookstypes } from "../../types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "antd";
import RelatedProductcard from "./RelatedProductcard";


const BookDetailspage = () => {

  const {id} = useParams<{id: string}>();

  const {data: bookData} = useGetSingleBookQuery(id ?? '') as { data: TBookstypes[] | undefined };

  const book = bookData?.[0];

  console.log(book);

  return (
    <div>
      <div className="lg:h-[400px] md:h-[200px] w-full bg-[url('/eventstopimage.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="text-white lg:h-[400px] md:h-[200px] bg-black/40 flex flex-col gap-5 justify-center items-center">
            <p className="text-xl font-semibold">PRODUCTS</p>
            <h1  className="md:text-4xl text-2xl font-serif">Shop List</h1>
        </div>
      </div>

      <div className="container mx-auto justify-center items-center md:px-0 px-5 my-28">
        <div className="flex lg:flex-row flex-col gap-10 items-start">
          <LazyLoadImage effect="blur" src={book?.bookImage} alt="Book Cover" width={500} height={500} />

          <div className="flex flex-col gap-5 w-full">
            <p className="text-lg text-gray-500">{book?.author}</p>

            <h1 className="text-4xl font-serif">{book?.title}</h1>

            <p className="text-lg">Price: {book?.price} tk</p>

            <p className="text-gray-500">{book?.description}</p>

            {book?.inStock === true ? <div><Button>Buy Book</Button></div> : <div><Button disabled>Out of Stock</Button></div>}
            
            <p className="text-gray-500">Categories: {book?.category}</p>

            <div className="border-b-1 border-gray-300 w-full"></div>
            
            <div className="flex gap-10 items-start">
              <LazyLoadImage effect="blur" src="/authorimage1.png" alt="i" width={80} height={80} />
              <div className="flex flex-col gap-4">
                <p className="text-gray-500">{book?.author}</p>
                <p className="text-2xl font-serif">{book?.title}</p>
                <p className="text-gray-500">{book?.description}</p>
              </div>
            </div>

            <div className="border-b-1 border-gray-300 w-full"></div>

          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10 mt-20">
            <div className="flex justify-center items-center gap-10">
              <button className="border border-gray-200 hover:bg-black hover:text-white duration-200 px-15 py-3 font-serif">description</button>
              <button className="border border-gray-200 hover:bg-black hover:text-white duration-200 px-15 py-3 font-serif">additional information</button>
              <button className="border border-gray-200 hover:bg-black hover:text-white duration-200 px-15 py-3 font-serif">reviews (0)</button>
            </div>

            <h1 className="text-2xl">Related Products</h1>
            <div className="border-b-1 border-gray-300 w-full"></div>

            <RelatedProductcard/>
        </div>
      </div>
    </div>
  )
}

export default BookDetailspage