

const OurservicesAuthor = () => {
  return (
    <div className="flex flex-col font-serif gap-5 text-center items-center justify-center my-28">
        <p className="text-sm text-gray-400">OUR SERVICES</p>
        <h1 className="text-4xl">Authors of the month</h1>
        <p className="text-gray-500">Our bookstore proudly supports authors by showcasing their works and providing a platform to connect with readers. From book signings to author spotlights, we celebrate the creativity behind every story.</p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20 mt-10">
            <div className="flex flex-col gap-4 text-center items-center justify-center">
                <img src="/authorimage1.png" className="w-50" alt="i" />
                <div>
                    <p className="text-gray-500">AUTHOR</p>
                    <h2 className="text-2xl">Adam Strass</h2>
                </div>
                
                <p className="text-gray-400">Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.</p>
            </div>

            <div className="flex flex-col gap-4 text-center items-center justify-center">
                <img src="/authorimage2.png" className="w-50" alt="i" />
                <div>
                    <p className="text-gray-500">DESIGNER</p>
                    <h2 className="text-2xl">Jennifer Doe</h2>
                </div>
                
                <p className="text-gray-400">Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.</p>
            </div>

            <div className="flex flex-col gap-4 text-center items-center justify-center">
                <img src="/authorimage3.png" className="w-50" alt="i" />
                <div>
                    <p className="text-gray-500">CONSULTANT</p>
                    <h2 className="text-2xl">James Coleman</h2>
                </div>
                
                <p className="text-gray-400">Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.</p>
            </div>

            <div className="flex flex-col gap-4 text-center items-center justify-center">
                <img src="/authorimage4.png" className="w-50" alt="i" />
                <div>
                    <p className="text-gray-500">SUPPORT</p>
                    <h2 className="text-2xl">Linda Heyes</h2>
                </div>
                
                <p className="text-gray-400">Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.</p>
            </div>
        </div>
    </div>
  )
}

export default OurservicesAuthor