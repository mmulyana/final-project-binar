import React, { useEffect, useState } from 'react'

import { seatClassData } from '@/utils/local'
import IconClose from 'public/icon/close.svg'
import Button from '../Button'
import Image from 'next/image'
import { changeToRupiah } from '@/utils'

export default function SeatClassModal({ toggleModal, dispatch, isOpen }) {
  const [seates, setSeates] = useState(seatClassData)

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      toggleModal()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, toggleModal, handleKeyDown])

  function handleClickSeat(id) {
    const newSeatesSelected = seates
      .map((seat) => {
        return { ...seat, isSelected: false }
      })
      .map((seat) => {
        if (seat.id === id) {
          return { ...seat, isSelected: true }
        }
        return seat
      })

    setSeates(newSeatesSelected)
  }

  if (isOpen) {
    return (
      <div className='absolute top-8 right-0 z-50 border bg-white  border-gray-200 rounded-2xl w-full md:w-[calc(100%+160px)]'>
        <div className='h-fit'>
          <div className='py-[14px] flex justify-end items-center border-b border-neutral-2 px-4'>
            <button onClick={toggleModal}>
              <Image src={IconClose} h={16} w={16} />
            </button>
          </div>

          <div className='grid grid-cols-2 gap-4 mb-2 px-4'>
            <div>
              <p className='py-2 capitalize font-medium'>Penumpang</p>
            </div>
            <div>
              <p className='py-2 capitalize font-medium'>Kelas Penerbangan</p>
              {seates.map((seat, index) => (
                <RadioSeat
                  data={seat}
                  key={index}
                  handleClick={handleClickSeat}
                  index={index}
                  sum={seates.length}
                />
              ))}
            </div>
          </div>

          <div className='flex justify-end items-center pb-4 px-4'>
            <Button
              onClick={toggleModal}
              className='px-4 py-2 rounded bg-gray-100 text-[#4642FF] font-medium hover:bg-gray-200 duration-75 ease-in'
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

function RadioSeat({ data, handleClick, index, sum }) {
  return (
    <div
      onClick={() => handleClick(data.id)}
      className={[
        'relative px-2 cursor-pointer',
        data.isSelected ? 'bg-gray-200 text-slate-800' : 'text-neutral-5',
      ].join(' ')}
    >
      <div
        className={[
          'py-2 border-b',
          index !== sum - 1 ? 'border-neutral-2' : 'border-transparent',
        ].join(' ')}
      >
        <p className='capitalize'>{data.name}</p>
      </div>
    </div>
  )
}
