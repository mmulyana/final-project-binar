import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import { useTranslation } from 'react-i18next'

export default function SortingModal({ setData, locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const [sortingType, setSortingType] = useState(dataSortingType)
  const { t } = useTranslation()
  const ref = useRef()

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [ref, setIsOpen])

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
    <div ref={ref} className='relative'>
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
        <p className='text-gray-500 text-sm'>{t('result_ticket_sort')}</p>
      </Button>

      {!!isOpen && (
        <div className='absolute top-0 right-0 w-80 h-fit flex flex-col gap-2 bg-white border rounded z-20 p-1'>
          {sortingType?.map((d, index) => (
            <div
              key={index}
              className={[
                'w-full py-2 rounded px-4 cursor-pointer',
                d.isActive
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'hover:bg-gray-100',
              ].join(' ')}
              onClick={() => handleClick(d.id)}
            >
              <p>{d.name[locale]}</p>
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
    name: {
      id: 'harga terendah',
      en: 'Lower price',
    },
    value: 'ASC',
    isActive: true,
  },
  {
    id: 2,
    name: {
      id: 'harga tertinggi',
      en: 'highest price',
    },
    value: 'DSC',
    isActive: false,
  },
  {
    id: 3,
    name: {
      id: 'Berangkat paling awal',
      en: 'Earliest departure',
    },
    value: 'EARLIEST-D',
    isActive: false,
  },
  {
    id: 4,
    name: {
      id: 'Berangkat paling akhir',
      en: 'Last departure',
    },
    value: 'LATEST-D',
    isActive: false,
  },
  {
    id: 5,
    name: {
      id: 'Tiba paling awal',
      en: 'Earliest arrival',
    },
    value: 'EARLIEST-A',
    isActive: false,
  },
  {
    id: 6,
    name: {
      id: 'Tiba paling akhir',
      en: 'Arrived last',
    },
    value: 'LATEST-A',
    isActive: false,
  },
  {
    id: 7,
    name: {
      id: 'durasi paling sedikit',
      en: 'Least duration',
    },
    value: 'SHORTEST_DURATION',
    isActive: false,
  },
]
