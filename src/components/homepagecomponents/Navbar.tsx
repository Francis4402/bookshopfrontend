import Topnav from "./Topnav"
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import DrawerSlider from "./DrawerSlider";
import { Avatar, Dropdown, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AuthProps, PageProps, ShopProps } from "../Navmenuprops/NavMenuProps";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from '/logo.png';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";


const Navbar = () => {

  const user = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();

  const handleLogout = () => dispatch(logout());

  console.log(user);

  const menuItems = [
    { key: 'profile', label: <Link to='/profile'>Profile</Link> },
    {key: 'dashboard', label: <Link to='/admin/dashboard'>Dashboard</Link>},
    { key: 'logout', label: <span onClick={handleLogout}>Logout</span> }
  ];

  return (
    <div>
      <Topnav/>
      <div className="container mx-auto items-center md:px-0 px-5">
        <div className="flex justify-between items-center h-30">
          <div className="flex gap-16 items-center">
            <Link to={"/"}>
              <LazyLoadImage effect="blur" src={logo} alt="logo" height={50} width={50}/>
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
              

              <Dropdown menu={{ items: ShopProps, style: {width: "150px", padding: "10px"}}}>
                <a onClick={(e) => e.preventDefault()} style={{ cursor: "pointer"}}>
                  <Space>
                    Shop
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>

              {
                !user && (
                  <Dropdown menu={{ items: AuthProps, style: {width: "150px", padding: "10px"}}}>
                    <a onClick={(e) => e.preventDefault()} style={{ cursor: "pointer"}}>
                      <Space>
                        Auth
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                )
              }

            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="md:flex hidden gap-4 items-center">
              <MdOutlineShoppingBag size={25} />
              <p className="text-sm">$0.00</p>
              |
              <HiMagnifyingGlass size={25} />
              |
            </div>
            <div className="md:hidden block">
              <DrawerSlider trigger={<FaBars size={20} className="cursor-pointer" />} />
            </div>
            
            {
              user && (
                <Dropdown menu={{ items: menuItems }} placement="bottomRight" trigger={['click']}>
                    <Avatar style={{ backgroundColor: '#87d068', cursor: 'pointer' }}>
                      <UserOutlined />
                    </Avatar>
                </Dropdown>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar