import { useEffect } from "react"
import gsap from "gsap";
import { Carousel } from 'antd';


const Carousels = () => {

    useEffect(() => {
        gsap.fromTo(
            ".text",
            {opacity: 0, x: -50},
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.2,
            }
        );

        gsap.fromTo(
            ".img",
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.2,
            }
        );

    }, []);

  return (
    <Carousel arrows className="custom-carousel">
        <div>
            <div className="md:h-[550px] h-auto w-full bg-[#efe6d5] md:text-left text-center flex lg:flex-row flex-col gap-5 justify-between items-center md:px-40 p-10">
                <div className="max-w-sm lg:max-w-xl flex flex-col gap-4">
                    <p className="capitalize text font-mono text-sm">IT'S CHAPTERONE</p>
                    <h1 className="heading text-4xl font-serif">We love literature</h1>
                    <p className="text-sm">Lost in Paris by Candy Callaghan is a sweet, uplifting story of love, dreams, and new beginnings in the heart of Paris.</p>
                    <div><button className="text-white bg-red-600 px-8 py-3 text-lg  hover:bg-red-500 duration-200 cursor-pointer font-mono img">Read More</button></div>
                </div>
                <img
                    src="/bookccover1.png"
                    alt="i"
                    className="h-auto w-72 img"
                />
            </div>
        </div>

        <div>
            <div className="md:h-[550px] h-auto w-full bg-[#efe6d5] md:text-left text-center flex lg:flex-row flex-col gap-5 justify-between items-center md:pr-40 md:pl-40 p-10">
            <div className="max-w-sm lg:max-w-xl flex flex-col gap-4">
                    <h1 className="heading text-4xl font-serif">MASTER YOUR CODING SKILLS</h1>
                    <p className="text-sm">Lost in Paris by Candy Callaghan is a sweet, uplifting story of love, dreams, and new beginnings in the heart of Paris.</p>
                    <div><button className="text-white bg-red-600 px-8 py-3 text-lg  hover:bg-red-500 duration-200 cursor-pointer font-mono img">Read More</button></div>
                </div>
                <img
                    src="/bookccover3.png"
                    alt="i"
                    className="h-auto w-72 img"
                />
            </div>
        </div>

        <div>
            <div className="md:h-[550px] text-white h-auto w-full bg-[#252525] md:text-left text-center flex lg:flex-row flex-col gap-5 justify-between items-center md:pr-40 md:pl-40 p-10">
            <div className="max-w-sm lg:max-w-xl flex flex-col gap-4">
                    <h1 className="heading text-4xl font-serif">THE MOONLIGHT</h1>
                    <p className="text-sm">Lost in Paris by Candy Callaghan is a sweet, uplifting story of love, dreams, and new beginnings in the heart of Paris.</p>
                    <div><button className="text-white bg-red-600 px-8 py-3 text-lg  hover:bg-red-500 duration-200 cursor-pointer font-mono img">Read More</button></div>
                </div>
                <img
                    src="/bookccover2.png"
                    alt="i"
                    className="h-auto w-72 img"
                />
            </div>
        </div>
      
    </Carousel>
  )
}

export default Carousels