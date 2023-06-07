import { useReducer, useState } from 'react'
import Image from 'next/image'
import Button from '../Button'
import Slider from '../Form/Slider'
import DestinationModal from '../Modal/DestinationModal'
import PassengersModal from '../Modal/PassengersModal'
import SeatClassModal from '../Modal/SeatClassModal'
import { sumDataNumbers } from '@/utils'
import { initialValue, searchReducer } from './reducer'

import Ic_Chevron_Down from 'public/icon/chevron-down.svg'
import Ic_Passenger from 'public/icon/passenger.svg'
import Ic_Plane from 'public/icon/plane.svg'
import Ic_Plane_Takeoff from 'public/icon/flight_takeoff.svg'
import Ic_Plane_Land from 'public/icon/flight_land.svg'
import Ic_Switch from 'public/icon/switch.svg'

export default function SearchFlight() {
  const [state, dispatch] = useReducer(searchReducer, initialValue)
  const [searchType, setSearchType] = useState('')

  function handleToggle(payload) {
    dispatch({ type: 'toggle', payload })
  }

  return (
    <div className='bg-white rounded-xl w-full h-fit mx-auto mt-20 shadow-high relative z-20 pb-6'>
      {/* top */}
      <div className='w-full h-20 flex items-center justify-between flex-col md:flex-row px-6'>
        {/* slider */}
        <div className='flex items-center justify-between gap-6 bg-[#e9e9e9] rounded p-1'>
          <div className='bg-white py-3 px-5 rounded shadow-sm text-sm cursor-pointer'>
            <p>Sekali Jalan</p>
          </div>
          <div className='py-3 px-5 rounded text-sm cursor-pointer'>
            <p>Pulang-pergi</p>
          </div>
        </div>

        <div className='flex items-center gap-10 text-sm'>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-4'>
              <Image src={Ic_Passenger} h={24} w={24} />
              <p>1 Dewasas</p>
              <p>2 Anak</p>
              <p>3 Bayi</p>
            </div>
            <Button>
              <Image src={Ic_Chevron_Down} h={24} w={24} />
            </Button>
          </div>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-4'>
              <Image src={Ic_Plane} h={24} w={24} />
              <p>Ekonomi</p>
            </div>
            <Button>
              <Image src={Ic_Chevron_Down} />
            </Button>
          </div>
        </div>
      </div>

      {/* below */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 relative'>
          <div>
            <p className='text-sm font-medium mb-3'>Terbang dari</p>
            <div className='relative h-14 bg-[#e9e9e9] rounded flex items-center px-6 gap-4'>
              <Image src={Ic_Plane_Takeoff} h={24} w={24} />
              <p>Jakarta</p>
            </div>
          </div>
          <Button className='w-8 h-8 rounded-full flex items-center justify-center absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 bg-white z-20 shadow-md'>
            <Image src={Ic_Switch} h={24} w={24} />
          </Button>
          <div>
            <p className='text-sm font-medium mb-3'>Pergi ke</p>
            <div className='relative h-14 bg-[#e9e9e9] rounded flex items-center px-6 gap-4'>
              <Image src={Ic_Plane_Land} h={24} w={24} />
              <p>Tokyo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
