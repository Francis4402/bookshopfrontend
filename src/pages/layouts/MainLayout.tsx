import { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import { Button, Layout, theme } from 'antd';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import Sidebar from '../layouts/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';



const { Header, Content } = Layout;


const MainLayout = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('/');
    }
    

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        if(window.innerWidth < 768) {
          setCollapsed(true);
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
      
      const dispatch = useAppDispatch();

      
    const handleLogout = () => {
        dispatch(logout());
        toast.success("You have been logged out successfully.");
    }

  return (
    <Layout hasSider style={{ height: '100%' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} isMobile={isMobile} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {!isMobile && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        )}
          <p className='sm:text-lg sm:pl-0 pl-5 font-bold font-serif'>Admin Dashboard</p>
            <div>
              <Button type="primary" onClick={handleNavigate}  style={{marginRight: '20px'}}>
                  Home
              </Button>

              <Button type="primary" onClick={handleLogout} style={{marginRight: '20px'}}>
                  Logout
              </Button>
            </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              height: '100%',
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout