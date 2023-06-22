import React, { useEffect, useMemo } from 'react'
import Ic_Close from 'public/icon/close.svg'
import Image from 'next/image'
import Button from '../Button'
import { suggestions } from '@/utils/local'
import airports from '@/utils/airports'

export default function SuggestionModal({ dispatch, type, isOpen, data }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      dispatch({ type: 'hideSearch' })
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
  }, [isOpen, handleKeyDown])

  const handleClick = (value, iata) => {
    dispatch({
      type: 'onchange',
      payload: {
        type,
        value,
      },
    })

    dispatch({
      type: 'onchange',
      payload: {
        type: type === 'to' ? 'destination' : 'origin',
        value: iata,
      },
    })

    dispatch({ type: 'hideSearch' })
    dispatch({ type: 'resetForm' })
  }

  if (isOpen) {
    return (
      <div className='absolute w-full z-50 top-24 bg-white pb-4 rounded border'>
        <div className='flex items-center justify-end px-4 py-3 mb-2 border-b border-gray-300'>
          <Button onClick={() => dispatch({ type: 'hideSearch' })}>
            <Image src={Ic_Close} h={24} w={24} alt='close modal button' />
          </Button>
        </div>
        <div className='flex flex-col gap-1 px-4'>
          {type === 'from' && data.valueFrom !== '' ? (
            <>
              {data.valueFrom !== ''
                ? airports
                    .filter((airport) =>
                      airport.city
                        .toLowerCase()
                        .includes(data.valueFrom.toLowerCase())
                    )
                    .splice(0, 10)
                    .map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleClick(item.city, item.iata_code)}
                        className='p-2 rounded hover:bg-gray-100 text-gray-700 text-left'
                      >
                        <p>
                          {item.city},{' '}
                          <span className='text-gray-900'>
                            {item.iata_code}
                          </span>
                        </p>
                        <p className='text-xs text-gray-400'>
                          bandara {item.name}
                        </p>
                      </button>
                    ))
                : null}
            </>
          ) : (
            <>
              {data.valueTo !== ''
                ? airports
                    .filter((airport) =>
                      airport.city
                        .toLowerCase()
                        .includes(data.valueTo.toLowerCase())
                    )
                    .splice(0, 10)
                    .map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleClick(item.city, item.iata_code)}
                        className='p-2 rounded hover:bg-gray-100 text-gray-700 text-left'
                      >
                        <p>
                          {item.city},{' '}
                          <span className='text-gray-900'>
                            {item.iata_code}
                          </span>
                        </p>
                        <p className='text-xs text-gray-400'>
                          bandara {item.name}
                        </p>
                      </button>
                    ))
                : null}
            </>
          )}
        </div>
        {data.valueFrom === '' && data.valueTo === '' ? (
          <div className='px-4'>
            <p className='text-slate-800 text-sm mb-1'>
              Pilih Kota atau bandara populer
            </p>

            <div className='flex flex-col gap-1'>
              {airports.slice(0, 5).map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(item.city, item.iata_code)}
                  className='p-2 rounded hover:bg-gray-100 text-gray-700 text-left'
                >
                  <p>
                    {item.city},{' '}
                    <span className='text-gray-900'>{item.iata_code}</span>
                  </p>
                  <p className='text-xs text-gray-400'>bandara {item.name}</p>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
