import { FaLocationDot } from "react-icons/fa6"
import Map from "../../components/Map"
import { MailOutlined, MobileOutlined } from "@ant-design/icons"
import LogoGrids from "../../components/homepagecomponents/LogoGrids"


const ContactPage = () => {
  return (
    <div>
      <Map/>

      <div className="container mx-auto items-center justify-center md:px-0 px-5 my-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-serif">Bookstore Central</h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FaLocationDot size={20} className="text-gray-700" />
                <p className="text-gray-500">Chittagong, EPZ</p>
              </div>
              
              <div className="flex gap-2 items-center">
                <MobileOutlined size={20} className="text-gray-700" />
                <p className="text-gray-500">(+123) 456 789</p>
              </div>

              <div className="flex gap-2 items-center">
                <MailOutlined size={20} className="text-gray-700" />
                <p className="text-gray-500">chapter@example.com</p>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-serif">Bookstore 1</h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FaLocationDot size={20} className="text-gray-700" />
                <p className="text-gray-500">194 Amsterdam Ave NY</p>
              </div>
              
              <div className="flex gap-2 items-center">
                <MobileOutlined size={20} className="text-gray-700" />
                <p className="text-gray-500">(+123) 456 789</p>
              </div>

              <div className="flex gap-2 items-center">
                <MailOutlined size={20} className="text-gray-700" />
                <p className="text-gray-500">chapter@example.com</p>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-serif">Bookstore 2</h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FaLocationDot size={20} className="text-gray-700" />
                <p className="text-gray-500">194 Amsterdam Ave NY</p>
              </div>
              
              <div className="flex gap-2 items-center">
                <MobileOutlined size={20} className="text-gray-700" />
                <p className="text-gray-500">(+123) 456 789</p>
              </div>

              <div className="flex gap-2 items-center">
                <MailOutlined size={20} className="text-gray-700" />
                <p className="text-gray-500">chapter@example.com</p>
              </div>

            </div>
          </div>


          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-serif">Bookstore 3</h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FaLocationDot size={20} className="text-gray-700" />
                <p className="text-gray-500">194 Amsterdam Ave NY</p>
              </div>
              
              <div className="flex gap-2 items-center">
                <MobileOutlined size={20} className="text-gray-700" />
                <p className="text-gray-500">(+123) 456 789</p>
              </div>

              <div className="flex gap-2 items-center">
                <MailOutlined size={20} className="text-gray-700" />
                <p className="text-gray-500">chapter@example.com</p>
              </div>

            </div>
          </div>
        </div>

        <LogoGrids/>
      </div>
    </div>
  )
}

export default ContactPage