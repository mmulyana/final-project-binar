import React from 'react'
import withModal from './withModal'
import IconClose from 'public/icon/close.svg'
import IconSearch from 'public/icon/search.svg'
import Image from 'next/image'

function Destination({ toggleModal }) {
  return (
    <div className='relative max-w-[968px] mx-auto h-full'>
      <div className='absolute top-[450px] left-1/2 -translate-x-1/2 z-50 h-3 w-full'>
        <div className='max-w-[700px] mx-auto px-4'>
          <div className='px-[22px] py-6 bg-white rounded-xl flex flex-col gap-4 mx-auto'>
            <div className='grid grid-cols-[1fr_16px] gap-2 md:gap-[10px]'>
              <div className='relative'>
                <Image
                  src={IconSearch}
                  h={16}
                  w={16}
                  className='absolute top-1/2 -translate-y-1/2 left-2 hidden md:block'
                />
                <input
                  placeholder='Masukan Kota atau Negara'
                  className='h-10 rounded border border-neutral-3 outline-none px-4 md:px-12 w-full'
                  autoFocus
                />
              </div>
              <button onClick={toggleModal}>
                <Image src={IconClose} w={16} h={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DestinationModal = withModal(Destination)
export default DestinationModal
