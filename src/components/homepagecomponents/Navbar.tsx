import Topnav from "./Topnav"
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import DrawerSlider from "./DrawerSlider";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { PageProps, ShopProps } from "../Navmenuprops/NavMenuProps";



const Navbar = () => {

  return (
    <div>
      <Topnav/>
      <div className="container mx-auto items-center">
        <div className="flex justify-between items-center h-30">
          <div className="flex gap-16 items-center">
            <Link to={"/"}>
              <img src="./logo.png" alt="logo" height={50} width={50}/>
            </Link>
            <div className="md:flex gap-4 font-serif hidden">
              <Link to="/">Home</Link>

              <Dropdown menu={{ items: PageProps, style: {width: "150px", padding: "10px"} }}>
                <a onClick={(e) => e.preventDefault()} style={{ cursor: "pointer"}}>
                  <Space>
                    Pages
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>

              <Link to="/events">Events</Link>

              <Link to="/">Blog</Link>

              <Dropdown menu={{ items: ShopProps, style: {width: "150px", padding: "10px"}}}>
                <a onClick={(e) => e.preventDefault()} style={{ cursor: "pointer"}}>
                  <Space>
                    Shop
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>

            </div>
          </div>

          <div className="flex gap-4 items-center">
            <MdOutlineShoppingBag size={25} />
            <p className="text-sm">$0.00</p>
            |
            <HiMagnifyingGlass size={25} />
            |
            <DrawerSlider trigger={<FaBars size={20} className="cursor-pointer" />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar