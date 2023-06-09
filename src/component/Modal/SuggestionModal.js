import React, { useEffect } from 'react'
import Ic_Close from 'public/icon/close.svg'
import Image from 'next/image'
import Button from '../Button'
import { suggestions } from '@/utils/local'

export default function SuggestionModal({
  toggleModal,
  dispatch,
  type,
  isOpen,
}) {
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

  const handleClick = (value) => {
    dispatch({
      type: 'onchange',
      payload: {
        type,
        value,
      },
    })

    dispatch({ type: 'toggle', payload: 'search' })
  }

  if (isOpen) {
    return (
      <div className='absolute w-full z-50 top-24 bg-white shadow-lg shadow-slate-300/50 pb-4 rounded-md'>
        <div className='flex items-center justify-between px-4 py-3 mb-2 border-b border-gray-300'>
          <p>Pilih Kota atau bandara populer</p>
          <Button onClick={toggleModal}>
            <Image src={Ic_Close} h={24} w={24} alt='close modal button'/>
          </Button>
        </div>
        <div className='flex flex-col gap-1 px-4'>
          {suggestions.map((item, index) => (
            <div
              key={index}
              className='px-4 py-2 rounded hover:bg-gray-100 text-gray-900'
            >
              <button onClick={() => handleClick(item.city)}>
                {item.city}, {item.nation}
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
