
import BookPromotionEvents from "../../components/homepagecomponents/BookPromotionEvents"
import Map from "../../components/Map"



const EventsPage = () => {

  return (
    <div>
        <div className="h-[400px] w-full bg-[url('/eventstopimage.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="text-white h-[400px] bg-black/40 flex flex-col gap-5 justify-center items-center">
                <p className="text-xl font-semibold">INFO</p>
                <h1  className="md:text-4xl text-2xl font-serif">Festival of Books</h1>
            </div>
        </div>

        <div className="container mx-auto items-center h-full lg:px-0 px-5">
            <div className="mt-20">
                <BookPromotionEvents />
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                <img src="eventsingleimage1.jpg" alt="i" />

                <Map/>
            </div>
        </div>
    </div>
  )
}

export default EventsPage