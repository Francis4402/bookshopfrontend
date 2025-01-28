
const Footer = () => {
  return (
    <div>
        <div className="bg-[#282828] md:py-10 lg:px-0 px-5 py-16">
            <div className="flex flex-wrap lg:gap-20 gap-20 mx-auto md:justify-center">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl text-white">Publishers</h1>
                    <p className="text-gray-400">Bestsellers</p>
                    <p className="text-gray-400">Inerviews</p>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl text-white">Contact</h1>
                    <p className="text-gray-400">Stay in touch everything ChapterOne,<br/>
                        follow us on social media and learn about new promotions.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl text-white">News & Update</h1>
                    <p className="text-gray-400">We'd love it if you subscribed to our<br/>
                        newsletter! You'll love it too.
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-black py-5 items-center text-center text-white">
            @ 2025 QODE INTERACTIVE, ALL RIGHTS RESERVED
        </div>
    </div>
  )
}

export default Footer