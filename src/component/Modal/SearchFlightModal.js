import React from 'react'
import withModal from './withModal'
import IconClose from 'public/icon/close.svg'
import IconSearch from 'public/icon/search.svg'
import Image from 'next/image'

function SearchFlight({ toggleModal }) {
  return (
    <div className='px-[22px] py-6 bg-white rounded-xl flex flex-col gap-4 w-[700px]'>
      <div className='grid grid-cols-[1fr_16px] gap-[10px]'>
        <div className='relative'>
          <Image src={IconSearch} h={16} w={16} className='absolute top-1/2 -translate-y-1/2 left-2'/>
          <input
            placeholder='Masukan Kota atau Negara'
            className='h-10 rounded border border-neutral-3 outline-none px-12 w-full'
            autoFocus
          />
        </div>
        <button onClick={toggleModal}>
          <Image src={IconClose} w={16} h={16} />
        </button>
      </div>
    </div>
  )
}

const SearchFlightModal = withModal(SearchFlight)
export default SearchFlightModal
