import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { adminSidebarItems } from "../../routes/adminRoutes/admin_routes";


const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};


const Sidebar = ({ collapsed, isMobile }: {isMobile: boolean; collapsed: boolean; setCollapsed: (value: boolean) => void }) => {

  return (
    <Sider style={siderStyle} trigger={null} collapsible={!isMobile} collapsed={collapsed}>
        <div style={{color: 'white', alignItems: 'center', height: '4rem', display: 'flex'}}>
            
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={adminSidebarItems} />
    </Sider>
  )
}

export default Sidebar