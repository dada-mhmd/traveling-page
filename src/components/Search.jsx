import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2 className='uppercase'>
            luxury included vacations for tow people
          </h2>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            architecto a, corporis, tempora totam ratione est vel quo molestias
            officiis eveniet ad natus suscipit voluptas sunt ut cumque nemo.
            Nostrum officia ut assumenda error, atque, facere iste minus
            perferendis sint voluptas, ducimus ullam unde aliquam mollitia
            repellat eligendi praesentium aut et ab officiis? Error nihil
            perspiciatis, fuga deleniti, reiciendis necessitatibus,
            exercitationem sit omnis nostrum alias sapiente nam dignissimos
            voluptas fugit officiis consequatur! Nemo molestiae similique
            corporis libero nobis harum ducimus.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-2'>Leading Service</h3>
              <p className='py-1'>
                All-Inclusive company for 20 Years In-A-Row
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>Leading Service</h3>
              <p className='py-1'>
                All-Inclusive company for 20 Years In-A-Row
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div>
        <div className='border text-center'>
          <p className='pt-2'>get an additional 10% OFF</p>
          <p className='py-4'>12 hours left</p>
          <p className='bg-gray-800 text-gray-200 py-2'>book now and save</p>
        </div>

        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
              <option>Grand Antique</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>

          <div className='flex flex-col my-4'>
            <label>Check-In</label>
            <input className='border rounded-md p-2' type='date' />
          </div>

          <div className='flex flex-col my-2'>
            <label>Check-Out</label>
            <input className='border rounded-md p-2' type='date' />
          </div>

          <button className='w-full my-4'>Rates & Availibilities</button>
        </form>
      </div>
    </div>
  )
}

export default Search
