import Button from '@/component/Button'
import { CheckoutLayout } from '@/component/Layout'
import { changeToRupiah, formatTimestamp, getTimeByTimestamp } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

let timestamp = '2023-06-20T11:37:50.551Z'

function Success() {
  const router = useRouter()
  const [data, setData] = useState(null)

  useEffect(() => {
    if(router.isReady) {
      setData(router.query)
    }
  }, [router.isReady])
  
  return (
    <div className='max-w-[400px] h-screen pb-4 mx-auto px-4 pt-10'>
      <div className='w-full h-fit pb-8 bg-white rounded-lg mt-5 relative'>
        <div className='text-center flex flex-col gap-1 items-center justify-center relative h-28'>
          <div className='text-white h-14 w-14 rounded-full bg-emerald-500 flex items-center justify-center relative pt-[2px] -mt-12 border-[4px] border-white shadow'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20 6L9 17L4 12'
                stroke='currentColor'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <p className='text-slate-400 text-sm mt-2'>Pembayaran Berhasil</p>
          <p className='text-slate-800 font-semibold text-2xl'>
            {changeToRupiah(data?.t)}
          </p>

          <div className='absolute h-10 -bottom-5 w-10 bg-[#F0F1F6] -left-5 rounded-full' />
          <div className='absolute h-10 w-10 -bottom-5 bg-[#F0F1F6] -left-10' />

          <div className='absolute h-10 -bottom-5 w-10 bg-[#F0F1F6] -right-5 rounded-full' />
          <div className='absolute h-10 w-10 -bottom-5 bg-[#F0F1F6] -right-10' />

          <hr className='absolute bottom-0 -translate-x-1/2 left-1/2 w-[84%] border-dashed border-[1.4px] border-[#F0F1F6]' />
        </div>
        <div className='mt-2 px-6 pt-4 flex flex-col gap-2'>
          <p className='text-sm text-slate-600'>Detail transaksi</p>
          <div className='flex justify-between items-center text-sm'>
            <p className='text-slate-400'>tanggal</p>
            <p className='text-slate-800'>{formatTimestamp(data?.tm)}</p>
          </div>

          <div className='flex justify-between items-center text-sm'>
            <p className='text-slate-400'>waktu</p>
            <p className='text-slate-800'>{getTimeByTimestamp(data?.tm)}</p>
          </div>

          <div className='flex justify-between items-center text-sm'>
            <p className='text-slate-400'>Metode Pembayaran</p>
            <p className='text-slate-800'>{data?.mt}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 mt-5'>
        <Button className='py-3 rounded bg-gray-200 text-slate-800'>Cetak Tiket</Button>
        <Link href='/' className='py-3 rounded bg-[#326BF1] text-white text-center'>Kembali ke beranda</Link>
      </div>
    </div>
  )
}

Success.getLayout = (page) => {
  return <CheckoutLayout index={3}>{page}</CheckoutLayout>
}

Success.auth = { hasLoggedIn: true }

export default Success
