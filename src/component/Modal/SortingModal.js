import { useState } from 'react'
import Button from '../Button'

export default function SortingModal({ setData }) {
  const [isOpen, setIsOpen] = useState(false)
  const [sortingType, setSortingType] = useState(dataSortingType)

  function handleClick(id) {
    const newData = sortingType
      .map((prev) => {
        return { ...prev, isActive: false }
      })
      .map((prev) => {
        if (prev.id === id) {
          return { ...prev, isActive: !prev.isActive }
        }
        return prev
      })

    setSortingType(newData)
    setData(sortingType[id - 1].value)
    setIsOpen(false)
  }
  return (
    <div className='relative'>
      <Button
        className='flex items-center gap-2 text-gray-700'
        onClick={() => setIsOpen(true)}
      >
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4 18L20 18M4 6L8 6M4 12L14 12'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <p className='text-gray-500 text-sm'>Urutkan</p>
      </Button>

      {!!isOpen && (
        <div className='absolute top-0 right-0 w-80 h-fit flex flex-col gap-2 bg-white border rounded z-20 p-1'>
          {sortingType?.map((d, index) => (
            <div
              key={index}
              className={[
                'w-full py-2 rounded px-4 cursor-pointer',
                d.isActive
                  ? 'bg-blue-400 hover:bg-blue-500 text-white'
                  : 'hover:bg-gray-100',
              ].join(' ')}
              onClick={() => handleClick(d.id)}
            >
              <p>{d.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const dataSortingType = [
  {
    id: 1,
    name: 'harga terendah',
    value: 'ASC',
    isActive: true,
  },
  {
    id: 2,
    name: 'harga tertinggi',
    value: 'DSC',
    isActive: false,
  },
  {
    id: 3,
    name: 'Berangkat paling awal',
    value: 'EARLIEST-D',
    isActive: false,
  },
  {
    id: 4,
    name: 'Berangkat paling akhir',
    value: 'LATEST-D',
    isActive: false,
  },
  {
    id: 5,
    name: 'Tiba paling awal',
    value: 'EARLIEST-A',
    isActive: false,
  },
  {
    id: 6,
    name: 'Tiba paling akhir',
    value: 'LATEST-A',
    isActive: false,
  },
  {
    id: 7,
    name: 'durasi paling sedikit',
    value: 'SHORTEST_DURATION',
    isActive: false,
  },
]
