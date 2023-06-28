import React from 'react'
import withCollapsible from './withCollapsible'
import { SelectWithCheckbox } from '../Select'

function TimeFilter({
  dataD,
  setDataD,
  dataA,
  setDataA,
  isActiveFilter,
  setIsActiveFilter,
}) {
  function handleClick(id, type) {
    if (type === 'd') {
      const newData = dataD
        .map((prev) => {
          return { ...prev, isActive: false }
        })
        .map((prev) => {
          if (prev.id === id) {
            return { ...prev, isActive: true }
          }
          return prev
        })
      setDataD(newData)
    } else {
      const newData = dataA
        .map((prev) => {
          return { ...prev, isActive: false }
        })
        .map((prev) => {
          if (prev.id === id) {
            return { ...prev, isActive: true }
          }
          return prev
        })
      setDataA(newData)
    }
    if (!isActiveFilter) {
      setIsActiveFilter(true)
    }
  }

  return (
    <div className='mb-4'>
      <div>
        <p className='text-gray-500 text-sm'>Berangkat</p>
        <div className='grid grid-cols-2 gap-2 mt-3 px-1'>
          {dataD.map((data, index) => (
            <div
              key={index}
              className={[
                'rounded p-2 text-center cursor-pointer',
                data.isActive
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-100 hover:bg-gray-200',
              ].join(' ')}
              onClick={() => handleClick(data.id, 'd')}
            >
              <p
                className={[
                  'text-xs',
                  data.isActive ? 'text-white/80' : 'text-slate-500',
                ].join(' ')}
              >
                {data.title}
              </p>
              <p
                className={[
                  'mt-1 text-sm',
                  data.isActive ? 'text-white' : 'text-slate-600',
                ].join(' ')}
              >
                {data.fromTime} - {data.toTime}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-gray-500 text-sm'>Tiba</p>
        <div className='grid grid-cols-2 gap-2 mt-3 px-1'>
          {dataA.map((data, index) => (
            <div
              key={index}
              className={[
                'rounded p-2 text-center cursor-pointer',
                data.isActive
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-100 hover:bg-gray-200',
              ].join(' ')}
              onClick={() => handleClick(data.id, 'a')}
            >
              <p
                className={[
                  'text-xs',
                  data.isActive ? 'text-white/80' : 'text-slate-500',
                ].join(' ')}
              >
                {data.title}
              </p>
              <p
                className={[
                  'mt-1 text-sm',
                  data.isActive ? 'text-white' : 'text-slate-600',
                ].join(' ')}
              >
                {data.fromTime} - {data.toTime}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const TimeFilterCollapsible = withCollapsible(TimeFilter)
export default TimeFilterCollapsible
