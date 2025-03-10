import { useNavigate } from "react-router-dom";
import { useGetAllBooksQuery } from "../../redux/features/books/bookManagementApi";
import { Card, Spin } from "antd";


const RelatedProductcard = () => {

    const {data: bookData, isLoading } = useGetAllBooksQuery(undefined);
    
    const navigate = useNavigate();

    const handleNavigate = (id: string, title: string) => {
      navigate(`/${title}/${id}`);
    };

  return (
    <div>
      
      <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center gap-5 my-28'>
        {isLoading ? 
        <div className='flex justify-center items-center w-full'>
            <Spin/>
        </div> : 
        bookData?.data?.map(
          ({_id, title, bookImage, author, price, category, inStock}) => (
            <Card key={_id} onClick={() => handleNavigate(_id, title)} hoverable cover={<img alt="example" src={bookImage} className='w-full h-96 object-cover' />}>
                <div className='flex justify-between items-center'>
                    <p className='text-gray-400'>{author}</p>
                    <p className='font-semibold'>{category}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <p>Book Name : </p>
                    <h1 className='text-lg font-semibold'>{title}</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Price : {price} tk</p>
                    <p>{inStock ? "In Stock" : "Out of Stock"}</p>
                </div>
            </Card>
          )
        )}
      </div>
    </div>
  )
}

export default RelatedProductcard