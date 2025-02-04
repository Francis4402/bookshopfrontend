import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { DownOutlined } from '@ant-design/icons';

interface DrawerSliderProps {
    trigger?: React.ReactNode;
}

interface NavLink {
    label: string;
    to: string;
}

const DrawerSlider: React.FC<DrawerSliderProps> = ({ trigger }) => {
    const user = useAppSelector(selectCurrentUser);
    const [open, setOpen] = useState(false);
    const [showPages, setShowPages] = useState(false);
    const [showShop, setShowShop] = useState(false);
    const dispatch = useAppDispatch();

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);
    const handleLogout = () => dispatch(logout());

    const navLinks: NavLink[] = [
        { label: 'Home', to: '/' },
        ...(user?.role === 'admin' ? [{ label: 'Admin Dashboard', to: '/admin/dashboard' }] : []),
        ...(!user ? [
            { label: 'Login', to: '/login' },
            { label: 'Register', to: '/register' }
        ] : []),
        {label: 'Events', to: '/events'},
    ];

    const pageLinks: NavLink[] = [
        { label: 'About Us', to: '/about' },
        { label: 'Our Services', to: '/ourservices' },
        { label: 'Contact Us', to: '/contact' }
    ];

    const shopLinks: NavLink[] = [
        {label: 'All Products', to: '/allproducts'},
        {label: 'Cart', to: '/cart'},
        {label: 'Checkout', to: '/checkout'},
    ];

    return (
        <div>
            <Button type='text' onClick={showDrawer}>{trigger}</Button>
            <Drawer onClose={onClose} open={open} className='drawer' size='default'>
                <div className='flex flex-col gap-5'>
                    <img src='/logo.png' alt='i' className='w-20' />
                    
                    {navLinks.map((link, index) => (
                        <Link key={index} to={link.to} style={{
                            color: "black",
                            fontSize: 20,
                            textDecoration: "none", 
                            padding: "0.25rem 1rem",
                            borderRadius: "0.25rem"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")} className='nav-link'>{link.label}</Link>
                    ))}

                    <div className='flex items-center cursor-pointer nav-link' style={{
                                color: "black",
                                fontSize: 20,
                                textDecoration: "none", 
                                padding: "0.25rem 1rem",
                                borderRadius: "0.25rem"
                            }}
                             onClick={() => setShowPages(!showPages)}>
                            Pages <DownOutlined className='ml-2' />
                    </div>
                    {showPages && (
                        <div className='flex flex-col pl-5'>
                            {pageLinks.map((link, index) => (
                                <Link key={index} to={link.to} style={{
                                    color: "black",
                                    fontSize: 20,
                                    textDecoration: "none", 
                                    padding: "0.25rem 1rem",
                                    borderRadius: "0.25rem"
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>{link.label}</Link>
                            ))}
                        </div>
                    )}

                    <div className='flex items-center cursor-pointer nav-link' style={{
                                color: "black",
                                fontSize: 20,
                                textDecoration: "none", 
                                padding: "0.25rem 1rem",
                                borderRadius: "0.25rem"
                            }}
                             onClick={() => setShowShop(!showShop)}>
                            Shop <DownOutlined className='ml-2' />
                    </div>

                    {showShop && (
                        <div className='flex flex-col pl-5'>
                            {shopLinks.map((link, index) => (
                                <Link key={index} to={link.to} style={{
                                    color: "black",
                                    fontSize: 20,
                                    textDecoration: "none", 
                                    padding: "0.25rem 1rem",
                                    borderRadius: "0.25rem"
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>{link.label}</Link>
                            ))}
                        </div>
                    )}

                    {user && (
                        <div className='px-4'>
                            <Button size='large' onClick={handleLogout}>Logout</Button>
                        </div>
                    )}
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerSlider;
