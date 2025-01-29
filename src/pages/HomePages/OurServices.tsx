import BookPromotionEvents from "../../components/homepagecomponents/BookPromotionEvents"


const OurServices = () => {
  return (
    <div>
      <div className="lg:h-[400px] md:h-[200px] w-full bg-[url('/eventstopimage.jpg')] bg-cover bg-center bg-no-repeat mb-28">
          <div className="text-white lg:h-[400px] md:h-[200px] bg-black/40 flex flex-col gap-5 justify-center items-center">
              <p className="text-xl font-semibold">INFO</p>
              <h1  className="md:text-4xl text-2xl font-serif">Our Services</h1>
          </div>
      </div>

      <div className="container mx-auto justify-center md:px-0 px-5">
        <BookPromotionEvents />
      </div>

      <div className="bg-[url('/bookcover/bgblue1.png')] h-[200px] bg-cover bg-center bg-no-repeat">
        <div className="max-w-4xl mx-auto h-[200px] flex lg:flex-row flex-col justify-between items-center lg:p-0 p-10">
          <h1 className="md:text-4xl text-2xl">Join the Books club here</h1>
          <button className="border hover:border-black hover:bg-black/80 hover:text-white duration-200 px-8 py-3">SEE TICKETS</button>
        </div>
      </div>

      <div className="container mx-auto justify-center md:px-0 px-5 text-center mt-28">
        <p className="text-gray-400">EVENTS</p>
        <h1 className="text-4xl font-serif">Book Promotion Events</h1>

        <div className="grid lg:grid-cols-3 gap-10 items-center justify-center my-16">

          <div className="bg-[#fbf9f6] p-10 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-gray-500">DURING MARCH</p>
              <h2 className="text-2xl font-serif">Book Promotion</h2>
            </div>

            <div className="font-serif text-gray-500 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p>12:00 - 12:30</p>
                <p>Train Your Mind for Extraordinary Performance</p>
              </div>
              <div className="border-b-1 text-gray-300"></div>
              <div className="flex flex-col gap-2">
                <p>12:35 - 13:00</p>
                <p>Onyx Storm (The Empyrean Book 3)</p>
              </div>
              <div className="border-b-1 text-gray-300"></div>
              <div className="flex flex-col gap-2">
                <p>13:05 - 14:00</p>
                <p>The Women: A Novel </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fbf9f6] p-10 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-gray-500">DURING APRIL</p>
              <h2 className="text-2xl font-serif">Book Promotion</h2>
            </div>

            <div className="font-serif text-gray-500 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p>12:00 - 12:30</p>
                <p>Fourth Wing: Empyrean, Book 1</p>
              </div>
              <div className="border-b-1 text-gray-300"></div>
              <div className="flex flex-col gap-2">
                <p>12:35 - 13:00</p>
                <p>Iron Flame: Empyrean, Book 2</p>
              </div>
              <div className="border-b-1 text-gray-300"></div>
              <div className="flex flex-col gap-2">
                <p>13:05 - 14:00</p>
                <p>The Parable of the Sower (Parable, 1)</p>
              </div>
            </div>
          </div>

          <div className="bg-[#fbf9f6] p-10 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-gray-500">DURING MAY</p>
              <h2 className="text-2xl font-serif">Book Promotion</h2>
            </div>

            <div className="font-serif text-gray-500 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p>12:00 - 12:30</p>
                <p>Sunrise on the Reaping (A Hunger Games Novel) </p>
              </div>
              <div className="border-b-1 text-gray-300"></div>
              <div className="flex flex-col gap-2">
                <p>12:35 - 13:00</p>
                <p>The God of the Woods: A Novel</p>
              </div>
              <div className="border-b-1 text-gray-300"></div>
              <div className="flex flex-col gap-2">
                <p>13:05 - 14:00</p>
                <p>The Parable of the Sower (Parable, 1)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
