import { CheckoutLayout } from '@/component/Layout'
import React from 'react'

function Order() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[800px_360px] justify-between'>
      <div>
        <p>Detail Pesanan Anda</p>
        <div className='bg-white rounded border border-[#DFDEE2]'></div>
      </div>
      <div className='bg-white rounded border border-[#DFDEE2] relative'>
        
      </div>
    </div>
  )
}

Order.getLayout = (page) => {
  return <CheckoutLayout index={1}>{page}</CheckoutLayout>
}

export default Order