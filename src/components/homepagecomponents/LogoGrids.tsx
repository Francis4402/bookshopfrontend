import { LazyLoadImage } from 'react-lazy-load-image-component';
import img1 from '/BookIcons/bookicons1.png';
import img2 from '/BookIcons/bookicons2.png';
import img3 from '/BookIcons/bookicons3.png';
import img4 from '/BookIcons/bookicons4.png';
import img5 from '/BookIcons/bookicons5.png';
import img6 from '/BookIcons/bookicons6.png';


const LogoGrids = () => {

  const logoimages = [img1, img2, img3, img4, img5, img6]

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-10 place-items-center my-20">
        {
          logoimages.map((pics) => (
            <LazyLoadImage effect='blur' src={pics} alt="i" className='w-34' />
          ))
        }
    </div>

  )
}

export default LogoGrids