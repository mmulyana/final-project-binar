import TimeFilterCollapsible from '@/component/Collapsible/TimeFilterCollapsible'
import TransitFilterCollapsible from '@/component/Collapsible/TransitFilterCollapsible'
import { SecondaryLayout } from '@/component/Layout'
import Ticket from '@/component/Ticket'
import React from 'react'

function Result() {
  return (
    <>
      <div className='h-[264px] w-full bg-white pt-[84px]'>
        <div className='max-w-[1200px] mx-auto h-full'>
          {/* flight destination */}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[320px_820px] gap-10 mt-4 max-w-[1200px] mx-auto px-4 lg:px-0'>
        <div className='h-fit border border-gray-100'>
          <p className='text-xl'>Filter</p>
          <div className='bg-white mt-4 rounded h-fit px-4'>
            {/* filter sidebar */}
            <TimeFilterCollapsible name='waktu' />
            <hr />
            <TransitFilterCollapsible name='Transit' />
          </div>
        </div>
        <div className='h-20 border border-gray-100'>
          <div className='grid grid-cols-3 gap-6'>{/* filter ticket */}</div>
          <div className='flex flex-col gap-6'>
            {/* ticket */}
            <Ticket />
          </div>
        </div>
      </div>
    </>
  )
}
Result.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}

export default Result
