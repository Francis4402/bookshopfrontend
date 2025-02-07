import Topnav from "./Topnav"
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import DrawerSlider from "../Sliders/DrawerSlider";
import { Avatar, Badge, Dropdown, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AuthProps, PageProps, ShopProps } from "../Navmenuprops/NavMenuProps";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from '/logo.png';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import CartSlider from "../Sliders/CartSlider";


const Navbar = () => {

  const user = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();

  const cartData = useAppSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logout())
    toast.success("Successfully logged out");
  };


  const menuItems = [
    { key: 'profile', label: <Link to={`/profile/${user?._id}`}>Profile</Link> },
    ...(user?.role === 'admin' ? [{ key: 'dashboard', label: <Link to='/admin/dashboard'>Dashboard</Link> }] : []),
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
              <CartSlider trigger={<Badge count={cartData.items.length > 0 ? cartData.totalQuantity : 0} size="small" offset={[-2, 0]} showZero>
                <Avatar shape="circle" style={{ backgroundColor: "#0000", verticalAlign: "middle" }} size={25} icon={<MdOutlineShoppingBag size={25} style={{ color: "black"}} />} />
              </Badge>} />
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
                    <div className="cursor-pointer w-10 h-10 rounded-full overflow-hidden" style={{ backgroundColor: '#87d068' }}>
                      {user?.profileImage ? <LazyLoadImage effect="blur" src={user?.profileImage} alt="i" /> : <UserOutlined />}
                    </div>
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