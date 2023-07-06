import React, { useEffect, useState } from 'react'

import { seatClassData } from '@/utils/local'
import IconClose from 'public/icon/close.svg'
import Button from '../Button'
import Image from 'next/image'
import Counter from '../Form/Counter'
import { useTranslation } from 'react-i18next'

export default function SeatClassModal({
  toggleModal,
  dispatch,
  isOpen,
}) {
  const [seates, setSeates] = useState(seatClassData)
  const [adult, setAdult] = useState(1)
  const [kid, setKid] = useState(0)
  const [baby, setBaby] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        toggleModal()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, toggleModal])

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

  function handleSave() {
    dispatch({
      type: 'onchange',
      payload: {
        type: 'seatClass',
        value: seates.filter((seat) => seat.isSelected === true)[0].name,
      },
    })

    dispatch({
      type: 'onchange',
      payload: {
        type: 'passengers',
        value: {
          adult,
          kid,
          baby,
        },
      },
    })

    toggleModal()
  }

  if (isOpen) {
    return (
      <div className='absolute top-8 right-0 border bg-white border-gray-200 rounded-2xl w-full md:w-[calc(100%+200px)] z-20  shadow-lg'>
        <div className='h-fit'>
          <div className='py-[14px] flex justify-end items-center border-b border-neutral-2 px-4'>
            <button onClick={toggleModal}>
              <Image src={IconClose} h={16} w={16} alt='close modal button' />
            </button>
          </div>

          {/* passengers section */}
          <div className='grid grid-cols-2 gap-6 mb-2 px-4'>
            <div>
              <p className='py-2 capitalize font-medium'>{t('searchFlight_passengerTitle')}</p>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-slate-800 font-medium'>{t('searchFlight_passengerAtitle')}</p>
                    <p className='text-slate-400 text-xs'>({t('searchFlight_passengerAbody')})</p>
                  </div>
                  <Counter
                    counter={adult}
                    inc={() => setAdult((prev) => prev + 1)}
                    dec={() => {
                      if (adult > 1) {
                        setAdult((prev) => prev - 1)
                      }
                    }}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-slate-800 font-medium'>{t('searchFlight_passengerKtitle')}</p>
                    <p className='text-slate-400 text-xs'>({t('searchFlight_passengerKbody')})</p>
                  </div>
                  <Counter
                    counter={kid}
                    inc={() => setKid((prev) => prev + 1)}
                    dec={() => {
                      if (kid > 0) {
                        setKid((prev) => prev - 1)
                      }
                    }}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-slate-800 font-medium'>{t('searchFlight_passengerBtitle')}</p>
                    <p className='text-slate-400 text-xs'>({t('searchFlight_passengerBbody')})</p>
                  </div>
                  <Counter
                    counter={baby}
                    inc={() => setBaby((prev) => prev + 1)}
                    dec={() => {
                      if (baby > 0) {
                        setBaby((prev) => prev - 1)
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* seat class section */}
            <div>
              <p className='py-2 capitalize font-medium'>{t('searchFlight_classTitle')}</p>
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
              onClick={handleSave}
              className='px-4 py-2 rounded bg-gray-100 text-[#4642FF] font-medium hover:bg-gray-200 duration-75 ease-in'
            >
              {t('searchFlight_btn-save')}
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
        data.isSelected ? 'bg-gray-100 text-slate-800' : 'text-neutral-5',
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
