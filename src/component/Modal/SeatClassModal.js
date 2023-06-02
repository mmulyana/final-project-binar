import React, { useState } from 'react'
import withModal from './withModal'

import { seatClassData } from '@/utils/local'
import IconClose from 'public/icon/close.svg'
import IconChecked from 'public/icon/check-success.svg'
import Button from '../Button'
import Image from 'next/image'

function SeatClass({ toggleModal }) {
  const [seates, setSeates] = useState(seatClassData)

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

  return (
    <div className='bg-white rounded-2xl w-[400px] h-fit'>
      <div className='px-4 py-[14px] flex justify-end items-center border-b border-neutral-2'>
        <button onClick={toggleModal}>
          <Image src={IconClose} h={16} w={16} />
        </button>
      </div>

      <div className='px-[10px] mb-4'>
        {seates.map((seat, index) => (
          <RadioSeat data={seat} key={index} handleClick={handleClickSeat} />
        ))}
      </div>

      <div className='flex justify-end items-center pb-3 px-4'>
        <Button
          onClick={toggleModal}
          className='h-12 w-[150px] rounded-xl bg-primary-purple-5 text-white title-16-medium'
        >
          Simpan
        </Button>
      </div>
    </div>
  )
}

const SeatClassModal = withModal(SeatClass)
export default SeatClassModal

function RadioSeat({ data, handleClick }) {
  return (
    <div
      onClick={() => handleClick(data.id)}
      className={[
        'relative px-6 cursor-pointer',
        data.isSelected ? 'bg-primary-purple-5 text-white' : 'text-neutral-5',
      ].join(' ')}
    >
      <div
        className={[
          'py-2 border-b',
          data.isSelected ? 'border-white' : 'border-neutral-2',
        ].join(' ')}
      >
        <p
          className={[
            'capitalize',
            data.isSelected ? 'body-14-bold' : 'body-14-medium',
          ].join(' ')}
        >
          {data.name}
        </p>
        <p
          className={[
            'body-14-medium',
            !data.isSelected ? 'text-primary-purple-4' : '',
          ].join(' ')}
        >
          {data.price}
        </p>

        {!!data.isSelected && (
          <Image
            src={IconChecked}
            h={24}
            w={24}
            className='absolute top-1/2 -translate-y-1/2 right-4'
          />
        )}
      </div>
    </div>
  )
}
