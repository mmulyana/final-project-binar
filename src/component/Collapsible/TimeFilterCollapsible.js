import React from 'react'
import withCollapsible from './withCollapsible'
import { SelectWithCheckbox } from '../Select'

function TimeFilter({ dataD, setDataD, dataA, setDataA }) {
  return (
    <div className='mb-4'>
      <div>
        <p className='text-gray-500 text-sm'>Berangkat</p>
        <div className='grid grid-cols-2 gap-2 mt-3 px-1'>
          {dataD.map((data, index) => (
            <div key={index} className='rounded bg-gray-100 p-2 text-center cursor-pointer hover:bg-gray-200'>
              <p className='text-xs text-slate-500'>{data.title}</p>
              <p className='mt-1 text-sm'>
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
            <div key={index} className='rounded bg-gray-100 p-2 text-center cursor-pointer hover:bg-gray-200'>
              <p className='text-xs text-slate-500'>{data.title}</p>
              <p className='mt-1 text-sm'>
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
