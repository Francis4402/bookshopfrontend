import { Button, Card, Spin } from 'antd';
import { useGetAllBooksQuery } from '../../redux/features/books/bookManagementApi';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useAppDispatch } from '../../redux/hooks';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { TBookstypes } from '../../types';




const AllBooks = () => {

    const {data: bookData, isLoading } = useGetAllBooksQuery(undefined, {
      refetchOnMountOrArgChange: true,
    });
    
  
    const navigate = useNavigate();

    const dispatch = useAppDispatch();


    const handleNavigate = (id: string, title: string) => {
      navigate(`/${title}/${id}`);
    };

    const handleAddToCart = (book: TBookstypes) => {
      dispatch(
        addToCart({
          product_id: book.product_id,
          bookImage: book.bookImage,
          category: book.category,
          _id: book._id,
          title: book.title,
          author: book.author,
          price: book.price,
          quantity: 1,
          description: book.description,
          inStock: book.inStock,
        })
      )
    }

  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center gap-5 mb-28'>
        {isLoading ? 
        <div className='flex justify-center items-center w-full'>
            <Spin/>
        </div> : 
        bookData?.data?.map(
          (book) => (
            <Card key={book._id} hoverable style={{ width: 300 }} cover={
            <LazyLoadImage effect='blur' onClick={() => handleNavigate(book._id, book.title)} alt="example" src={book.bookImage} className='w-full h-96 object-cover' />}>
                <div className='flex justify-between items-center'>
                    <p className='text-gray-400'>{book.author}</p>
                    <p className='font-semibold'>{book.category}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <p>Book Name : </p>
                    <h1 className='text-lg font-semibold'>{book.title}</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Price : {book.price} tk</p>
                    <p>{book.inStock ? "In Stock" : "Out of Stock"}</p>
                </div>

                <Button type='primary' className='mt-3 w-full' onClick={() => handleAddToCart(book)}>
                  Add to Cart
                </Button>
            </Card>
          )
        )}
    </div>
  )
}

export default AllBooks