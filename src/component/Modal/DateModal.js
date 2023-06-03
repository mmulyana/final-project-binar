import React, { useEffect, useRef, useState } from 'react'
import withModal from './withModal'
import { DayPicker } from 'react-day-picker'

function Dates({ isSingle = false, toggleModal }) {
  const [selected, setSelected] = useState(new Date())

  return (
    <div className='relative max-w-[968px] mx-auto h-full'>
      <div className='absolute top-[540px] left-1/2 -translate-x-1/2 z-50 w-full'>
        <div className='max-w-[635px] h-fit bg-white mx-auto rounded-2xl pt-4 pb-1'>
          <DayPicker
            selected={selected}
            onSelect={setSelected}
            numberOfMonths={isSingle ? 1 : 2}
            pagedNavigation
            mode={isSingle ? 'single' : 'range'}
            modifiersClassNames={{
              selected: 'my-selected',
            }}
          />
        </div>
      </div>
    </div>
  )
}

const DateModal = withModal(Dates)
export default DateModal
