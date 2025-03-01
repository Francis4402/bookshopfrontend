import { Button, Drawer } from 'antd';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { removeFromCart, updateQuantity } from '../../redux/features/cart/cartSlice';
import { useCreateOrderMutation } from '../../redux/features/order/order';
import { toast } from 'sonner';

interface DrawerSliderProps {
    trigger?: React.ReactNode;
}

const CartSlider: React.FC<DrawerSliderProps> = ({ trigger }) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    const dispatch = useAppDispatch();
    const [createOrder, {isLoading, isSuccess, data, isError, error}] = useCreateOrderMutation();

    const cartData = useAppSelector((state) => state.cart);

    const handlePlaceOrder = async () => {
        await createOrder({ products: cartData.items });
    };

    const toastId = "cart";

    useEffect(() => {
        if (isLoading) toast.loading("Processing ...", {id: toastId});

        if (isSuccess) {
            toast.success(data?.message, {id: toastId});

            if (data?.data) {
                setTimeout(() => {
                    window.location.href = data.data;
                }, 1000);
            }
        }

        if (isError) toast.error(JSON.stringify(error), {id: toastId});
    }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

    return (
        <div>
            <Button type='text' onClick={showDrawer}>{trigger}</Button>
            <Drawer onClose={onClose} open={open} className='drawer' size='default'>
                

                <div className="flex flex-col h-full">
                    

                    <div className="flex-grow overflow-y-auto max-h-[550px] pr-2">
                        {
                            cartData.items.length > 0 ? (
                                cartData.items.map((item) => (
                                    <li key={item._id} className='flex items-center gap-4 pb-3 mb-3 border-b border-gray-400'>
                                        <LazyLoadImage effect='blur' src={item.bookImage} alt='i' className='h-16 w-16 rounded-full object-cover' />
            
                                        <div className='flex flex-col gap-2 flex-grow'>
                                            <h4 className='text-sm font-medium'>{item.title}</h4>
                                            <div className='flex items-center gap-2 mt-1'>
                                                <button 
                                                    onClick={() => dispatch(updateQuantity({
                                                        id: item._id,
                                                        quantity: Math.max(item.quantity - 1, 1)
                                                    }))}
                                                    className='w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300'
                                                >
                                                    -
                                                </button>
                                                
                                                <span className='text-sm font-medium'>{item.quantity}</span>
            
                                                <button 
                                                    onClick={() => dispatch(updateQuantity({
                                                        id: item._id, 
                                                        quantity: Math.min(item.quantity + 1)
                                                    }))} 
                                                    className='w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300'
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            TK {item.price * item.quantity}
                                        </p>
                                        <button 
                                            onClick={() => dispatch(removeFromCart(item._id))} 
                                            className='text-red-500 hover:text-red-600 cursor-pointer hover:underline duration-200'
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">Your cart is empty</p>
                            )
                        }
                    </div>


                    <div className="border-t p-4 bg-white shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium text-gray-700">Total Quantity:</span>
                            <span className="text-lg font-bold">{cartData.totalQuantity}</span>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium text-gray-700">Total Price:</span>
                            <span className="text-lg font-bold">TK {cartData.totalPrice.toFixed(2)}</span>
                        </div>


                        <Button 
                            type="primary"
                            block 
                            onClick={handlePlaceOrder} 
                            className="mt-4"
                        >
                            Place Order
                        </Button>
                    </div>

                </div>
            </Drawer>
        </div>
    );
};

export default CartSlider;
