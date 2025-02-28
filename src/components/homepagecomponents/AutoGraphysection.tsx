import { LazyLoadImage } from "react-lazy-load-image-component"


const AutoGraphysection = () => {
  return (
    <div>
      <div className="bg-[#efe6d5]/20 lg:my-52 my-28 lg:px-52 px-10 lg:py-32 py-20 relative">
        <div className="flex flex-col gap-20 lg:flex-row justify-between items-center">
            <div className="flex flex-col max-w-md gap-8 lg:items-start items-center justify-center">
                <p className="text-gray-400 tracking-widest">AUTOBIOGRAPHY</p>
                <h2 className="md:text-4xl text-xl font-serif">This month's guest host</h2>
                <p className="font-serif text-gray-500 leading-relaxed">Join us for an exclusive event with guest host Linda Heyes, renowned author and storyteller. Don’t miss the chance to meet her and get your favorite book personally autographed!</p>
                <button className="border hover:border-black hover:bg-black/80 hover:text-white duration-200 md:px-15 px-8 py-3">READ MORE</button>
            </div>
            <LazyLoadImage effect="blur" src="/linecup.png" alt="i" className="w-72 h-72 lg:block hidden absolute lg:right-[46%] md:right-20 -bottom-28 top-[50%] right-2" />
            <img src="/autoguestimage.png" alt="i" className="absolute w-3xl right-32 hidden lg:block" />
            <LazyLoadImage effect="blur" src="/topguestimage.png" alt="i" className="w-72 right-32 lg:hidden block" />
        </div>
      </div>

      <div className="lg:my-52 my-28 relative">
        <div className="flex flex-col gap-10 md:flex-row justify-center items-center">
            <LazyLoadImage effect="blur" src="/autographytravelog1.png" className="lg:block hidden w-[600px]" alt="i" />
            <LazyLoadImage effect="blur" src="/autographytravelog2.png" className="lg:hidden block lg:w-[400px] w-full" alt="i" />
            <div className="flex flex-col max-w-md gap-8 items-start justify-center">
                <p className="text-gray-400 tracking-widest">AUTOBIOGRAPHY</p>
                <h2 className="md:text-4xl text-xl font-serif">This month's guest host</h2>
                <p className="font-serif text-gray-500 leading-relaxed">Join us for an exclusive event with guest host Linda Heyes, renowned author and storyteller. Don’t miss the chance to meet her and get your favorite book personally autographed!</p>
                <button className="border hover:border-black hover:bg-black/80 hover:text-white duration-200 md:px-15 px-8 py-3">READ MORE</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AutoGraphysection