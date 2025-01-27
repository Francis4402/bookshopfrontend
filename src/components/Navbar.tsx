import Topnav from "./Topnav"
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import DrawerSlider from "./DrawerSlider";


const Navbar = () => {


  return (
    <div>
      <Topnav/>
      <div className="container mx-auto items-center">
        <div className="flex justify-between items-center h-30">
          <div className="flex gap-16 items-center">
            <img src="./logo.png" alt="logo" height={50} width={50}/>
            <div className="md:flex gap-4 font-serif hidden">
              <p>Home</p>
              <p>Pages</p>
              <p>Events</p>
              <p>Blog</p>
              <p>Shop</p>
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