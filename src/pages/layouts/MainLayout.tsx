import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import { Button, Layout, theme } from 'antd';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import Sidebar from '../layouts/Sidebar';
import { Outlet } from 'react-router-dom';
import { toast } from 'sonner';



const { Header, Content, Footer } = Layout;


const MainLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

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
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <p className='text-lg font-bold font-serif'>Admin Dashboard</p>
            <Button type="primary" onClick={handleLogout} style={{marginRight: '20px'}}>
                Logout
            </Button>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout