import { Link } from "react-router-dom"

const BookPromotionEvents = () => {
  return (
    <div className="flex flex-col text-center gap-5 items-center justify-center">
        <p className="text-gray-400">EVENTS</p>
        <h1 className="text-4xl font-serif">Book Promotion Events</h1>
        <p className="text-gray-500">Explore exclusive discounts, limited-time offers, and new arrivals during our special book promotion event.</p>
        
        <div className="my-20 flex flex-col gap-10">
            <div className="grid sm:grid-cols-3 gap-10 items-center relative border-b border-gray-300 pb-6">
                <p className="leading-loose text-gray-400 font-thin">21 . 07 . 2026 / LA. CALIFORNIA</p>
                
                <div className=" border-gray-300 h-full absolute left-1/3 top-0"></div>
                
                <Link to={'/'} className="text-2xl font-serif hover:text-black/60">Festival of Books</Link>
                
                <div className=" border-gray-300 h-full absolute left-2/3 top-0"></div>
                
                <button className="border hover:border-black hover:bg-black/80 hover:text-white duration-200 px-8 py-3">SEE TICKETS</button>
            </div>

            <div className="grid sm:grid-cols-3 gap-10 items-center relative border-b border-gray-300 pb-6">
                <p className="leading-loose text-gray-400 font-thin">25 . 07 . 2026 / PARIS. FRANCIS</p>
                
                <div className=" border-gray-300 h-full absolute left-1/3 top-0"></div>
                
                <Link to={'/'} className="text-2xl font-serif hover:text-black/60">Books Signing</Link>
                
                <div className=" border-gray-300 h-full absolute left-2/3 top-0"></div>
                
                <button className="border hover:border-black hover:bg-black/80 hover:text-white duration-200 px-8 py-3">SEE TICKETS</button>
            </div>

            <div className="grid sm:grid-cols-3 gap-10 items-center relative border-b border-gray-300 pb-6">
                <p className="leading-loose text-gray-400 font-thin">25 . 07 . 2026 / WASHINGTON, US</p>
                
                <div className=" border-gray-300 h-full absolute left-1/3 top-0"></div>
                
                <Link to={'/'} className="text-2xl font-serif hover:text-black/60">Book Fair</Link>
                
                <div className=" border-gray-300 h-full absolute left-2/3 top-0"></div>
                
                <button className="border hover:border-black hover:bg-black/80 hover:text-white duration-200 px-8 py-3">SEE TICKETS</button>
            </div>

            <div className="grid sm:grid-cols-3 gap-10 items-center relative">
                <p className="leading-loose text-gray-400 font-thin">25 . 07 . 2026 / MADRID, SPAIN</p>
                
                <div className=" border-gray-300 h-full absolute left-1/3 top-0"></div>
                
                <Link to={'/'} className="text-2xl font-serif hover:text-black/60">Promotion Book</Link>
                
                <div className=" border-gray-300 h-full absolute left-2/3 top-0"></div>
                
                <button className="border hover:border-black hover:bg-black/80 hover:text-white duration-200 px-8 py-3">SEE TICKETS</button>
            </div>
        </div>

    </div>
  )
}

export default BookPromotionEvents