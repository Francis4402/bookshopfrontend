import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface DrawerSliderProps {
    trigger?: React.ReactNode;
  }

const DrawerSlider: React.FC<DrawerSliderProps> = ({ trigger}) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

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
                    padding: "0.25rem 0.5rem", 
                    borderRadius: "0.25rem" 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E5E7EB")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}>Home</Link>
                
            </div>
        </Drawer>
    </div>
  )
}

export default DrawerSlider