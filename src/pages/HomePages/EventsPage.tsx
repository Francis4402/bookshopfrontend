
import BookPromotionEvents from "../../components/homepagecomponents/BookPromotionEvents"
import Map from "../../components/Map"



const EventsPage = () => {

  return (
    <div>
        <div className="lg:h-[400px] md:h-[200px] w-full bg-[url('/eventstopimage.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="text-white lg:h-[400px] md:h-[200px] bg-black/40 flex flex-col gap-5 justify-center items-center">
                <p className="text-xl font-semibold">INFO</p>
                <h1  className="md:text-4xl text-2xl font-serif">Festival of Books</h1>
            </div>
        </div>

        <div className="container mx-auto items-center h-full lg:px-0 px-5">
            <div className="mt-20">
                <BookPromotionEvents />
            </div>

            <div className="flex flex-col gap-10">
                <div className="grid lg:grid-cols-2 gap-10">
                    <img src="eventsingleimage1.jpg" alt="i" />
                    
                    <Map/>
                </div>

                <p className="text-lg font-serif text-gray-500">A celebration of stories and ideas, where you can meet authors, attend book signings, join lively discussions, explore new genres, and participate in workshops. It's a place to discover new books, engage with fellow readers, and immerse yourself in the world of literature.</p>
            </div>

            <div className="font-serif gap-5 flex flex-col mt-10">
                <h1 className="text-4xl">Event Details</h1>
                <div className="border font-thin text-gray-200"></div>

                <div className="grid md:grid-cols-2 gap-5 mb-10">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 items-center">
                            <p className="text-gray-500 text-xl">Date:</p>
                            <p className="text-gray-400 font-thin">21 July 2024</p>
                        </div>
                        
                        <div className="flex gap-5 items-center">
                            <p className="text-gray-500 text-xl">Time:</p>
                            <p className="text-gray-400 font-thin">13:00pm - 15:00pm</p>
                        </div>

                        <div className="flex gap-5 items-center">
                            <p className="text-gray-500 text-xl">Venue:</p>
                            <p className="text-gray-400 font-thin">Lake Balboa</p>
                        </div>
                    
                        <div className="flex gap-5 items-center">
                            <p className="text-gray-500 text-xl">Address:</p>
                            <p className="text-gray-400 font-thin"> LA, California</p>
                        </div>
                        
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 items-center">
                            <p className="text-gray-500 text-xl">Hosting:</p>
                            <p className="text-gray-400 font-thin">City Library</p>
                        </div>
                        
                        <div className="flex gap-5 items-center">
                            <p className="text-gray-500 text-xl">Phone:</p>
                            <p className="text-gray-400 font-thin">+12 345 678 900</p>
                        </div>

                        <div className="flex gap-5 items-center">
                            <p className="text-gray-500 text-xl">Mail:</p>
                            <p className="text-gray-400 font-thin">chapter@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsPage