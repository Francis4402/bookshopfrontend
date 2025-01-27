import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Topnav = () => {

  return (
    <div className="bg-[#282828] hidden md:block">
      <div className="container mx-auto items-center">
          <div className="flex justify-between items-center h-10">
          <p className="text-white capitalize font-sans">free shiping for orders over $50</p> 

            <div className="flex gap-2 items-center text-white">
              <FaXTwitter />
              <FaInstagram />
              <FaFacebookF />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Topnav