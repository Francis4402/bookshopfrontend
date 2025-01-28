

const CategoryButtons = () => {
  return (
    <div className="flex flex-wrap mt-28 mb-20 gap-5 items-center justify-center">
        <button className="border border-gray-200 hover:bg-black hover:text-white duration-200 px-15 py-3 font-serif">All Books</button>
        <button className="border border-gray-200 hover:bg-black hover:text-white duration-200 px-15 py-3 font-serif">Best Sellers</button>
        <button className="border border-gray-200 hover:bg-black hover:text-white duration-200 px-15 py-3 font-serif">Fantasy</button>
        <button className="border border-gray-200 hover:bg-black hover:text-white duration-200 px-15 py-3 font-serif">History</button>
        <button className="border border-gray-200 hover:bg-black hover:text-white duration-200 px-15 py-3 font-serif">Poetry</button>
        <button className="border border-gray-200 hover:bg-black hover:text-white duration-200 px-15 py-3 font-serif">Science</button>
    </div>
  )
}

export default CategoryButtons