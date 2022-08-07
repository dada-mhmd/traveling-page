import Img1 from '../assets/borabora.jpg'
import Img2 from '../assets/borabora2.jpg'
import Img3 from '../assets/keywest.jpg'
import Img4 from '../assets/maldives.jpg'
import Img5 from '../assets/maldives2.jpg'
import Img6 from '../assets/maldives3.jpg'
import SelectsCards from './SelectsCards'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectsCards bg={Img1} text='Bora Bora' />
      <SelectsCards bg={Img2} text='Bora' />
      <SelectsCards bg={Img3} text='Antigua' />
      <SelectsCards bg={Img4} text='maldives' />
      <SelectsCards bg={Img5} text='maldives 2' />
      <SelectsCards bg={Img6} text='maldives 3' />
    </div>
  )
}

export default Selects
