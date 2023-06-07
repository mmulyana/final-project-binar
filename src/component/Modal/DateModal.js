import React, { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import Button from '../Button'

export default function DateModal({ isOneWay, toggleModal, dispatch, isOpen }) {
  const [selected, setSelected] = useState(new Date())

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      toggleModal()
    }
  }

  function handleClick() {
    dispatch({
      type: 'onchange',
      payload: {
        type: 'departureDate',
        value: isOneWay ? selected : selected.from,
      },
    })

    if (!isOneWay) {
      dispatch({
        type: 'onchange',
        payload: {
          type: 'returnDate',
          value: selected.to,
        },
      })
    }

    dispatch({ type: 'toggle', payload: 'date' })
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

  if (isOpen) {
    return (
      <div className='absolute top-28 left-1/2 -translate-x-1/2 w-full'>
        <div className='w-fit h-fit bg-white rounded pt-1 pb-3 mx-auto shadow-lg shadow-slate-300/50'>
          <DayPicker
            selected={selected}
            onSelect={setSelected}
            numberOfMonths={isOneWay ? 1 : 2}
            pagedNavigation
            mode={isOneWay ? 'single' : 'range'}
            modifiersClassNames={{
              selected: 'my-selected',
            }}
          />
          <div className='flex justify-end px-4 mt-2 w-full'>
            <Button
              onClick={handleClick}
              className='px-4 py-2 rounded bg-[#4642FF] text-white text-sm font-medium'
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
