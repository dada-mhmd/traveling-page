import Img1 from '../assets/borabora.jpg'
import Img2 from '../assets/borabora2.jpg'
import Img3 from '../assets/keywest.jpg'
import Img4 from '../assets/maldives.jpg'
import Img5 from '../assets/maldives2.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p className='py-4'>On the Caribean's Best Beached</p>

      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img
          className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2'
          src={Img1}
          alt='/'
        />
        <img className='w-full h-full object-cover' src={Img2} alt='/' />
        <img className='w-full h-full object-cover' src={Img3} alt='/' />
        <img className='w-full h-full object-cover' src={Img4} alt='/' />
        <img className='w-full h-full object-cover' src={Img5} alt='/' />
      </div>
    </div>
  )
}

export default Destinations
