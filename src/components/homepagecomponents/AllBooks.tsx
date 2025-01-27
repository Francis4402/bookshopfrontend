import { Card } from 'antd';
const { Meta } = Card;


const AllBooks = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 mb-28'>
        <Card
            hoverable
            className="w-full relative group overflow-hidden"
            cover={
                <div className="relative">
                <img
                    alt="example"
                    className="w-full h-auto duration-200 transform"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
                <div className="absolute inset-0 bg-red-500 hover:opacity-80 flex items-center justify-center opacity-0 duration-200">
                    <p className="text-white font-mono text-xl">Read More</p>
                </div>
                </div>
            }
            >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

    </div>
  )
}

export default AllBooks