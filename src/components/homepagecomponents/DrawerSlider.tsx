import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout, selectCurrentUser } from '../../redux/features/auth/authSlice';


interface DrawerSliderProps {
    trigger?: React.ReactNode;
}

const DrawerSlider: React.FC<DrawerSliderProps> = ({ trigger}) => {
    
    const user = useAppSelector(selectCurrentUser);

    const [open, setOpen] = useState(false);

    const dispatch = useAppDispatch();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <div>
        <Button type='text' onClick={showDrawer}>
            {trigger}
        </Button>
        <Drawer onClose={onClose} open={open}>
            <div className='flex flex-col gap-5'>
                <img src="/logo.png" alt="i" className='w-20' />
                
                <Link to={'/'} style={{ 
                    color: "black",
                    fontSize: 20,
                    textDecoration: "none", 
                    padding: "0.25rem 1rem",
                    borderRadius: "0.25rem"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>Home</Link>

                {
                    user?.role === 'admin' && (
                        <Link to={'/admin/dashboard'} style={{ 
                            color: "black",
                            fontSize: 20,
                            textDecoration: "none", 
                            padding: "0.25rem 1rem",
                            borderRadius: "0.25rem"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>Dashboard</Link>
                    )
                }
                
                {
                    !user && (
                        <>
                            <Link to={'/login'} style={{ 
                                color: "black",
                                fontSize: 20,
                                textDecoration: "none", 
                                padding: "0.25rem 1rem",
                                borderRadius: "0.25rem"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>Login</Link>

                            <Link to={'/register'} style={{ 
                                color: "black",
                                fontSize: 20,
                                textDecoration: "none", 
                                padding: "0.25rem 1rem",
                                borderRadius: "0.25rem"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>Register</Link>
                        </>
                    )
                }

                {
                    user && (
                        <Button onClick={handleLogout} style={{ 
                            color: "black",
                            fontSize: 20,
                            textDecoration: "none", 
                            padding: "0.25rem 1rem",
                            borderRadius: "0.25rem"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>Logout</Button>
                    )
                }
            </div>
            
        </Drawer>
    </div>
  )
}

export default DrawerSlider