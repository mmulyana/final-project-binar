import Button from '@/component/Button'
import { SecondaryLayout } from '@/component/Layout'
import React from 'react'

function Notifications() {
  return (
    <div className='max-w-[900px] mx-auto pt-24 px-4 lg:px-0'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <h1 className='text-lg'>Notifikasi</h1>
          <div className='w-6 h-6 rounded-lg bg-[#4642FF] flex items-center justify-center text-white text-sm'>
            {dataNotif.filter((data) => data.isMarked === false).length}
          </div>
        </div>
        <Button className='text-sm text-[#4642FF]'>Sudah dibaca</Button>
      </div>
      <div className='mt-4 flex flex-col border border-gray-200 rounded'>
        {dataNotif.map((data, index) => (
          <div
            key={index}
            className={[
              'flex gap-4 items-start py-3 px-4 relative',
              data.isMarked ? 'bg-white' : 'bg-blue-100 hover:bg-blue-200',
              index === 0 ? 'rounded-t' : '',
              index === dataNotif.length - 1 ? 'rounded-b' : '',
            ].join(' ')}
          >
            <div
              className={[
                'w-9 h-9 rounded-full flex items-center justify-center',
                data.isMarked
                  ? 'bg-slate-200 text-slate-600'
                  : 'bg-blue-300 text-blue-500 ',
              ].join(' ')}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div>
              <p className='capitalize text-sm text-slate-700'>{data.type}</p>
              <p className='mt-1 text-slate-700'>{data.title}</p>
              {data.message !== '' ? (
                <p className='text-slate-400 text-sm font-normal'>
                  {data.message}
                </p>
              ) : null}
              <p className='mt-2 text-xs text-slate-400'>{data.date}</p>
            </div>
            {!data.isMarked && <div className='absolute right-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-blue-500'/>}
          </div>
        ))}
      </div>
    </div>
  )
}

Notifications.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}

export default Notifications

const dataNotif = [
  {
    type: 'promosi',
    title: 'Dapatkan potongan 50% tiket!',
    message: 'syarat dan ketentuan berlaku',
    date: '20 maret, 14:04',
    isMarked: true,
  },
  {
    type: 'notifikasi',
    title:
      'Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!',
    message: '',
    date: '5 maret, 14:04',
    isMarked: false,
  },
  {
    type: 'promosi',
    title: 'Dapatkan potongan 50% tiket!',
    message: 'syarat dan ketentuan berlaku',
    date: '20 maret, 14:04',
    isMarked: false,
  },
  {
    type: 'promosi',
    title: 'Dapatkan potongan 50% tiket!',
    message: 'syarat dan ketentuan berlaku',
    date: '20 maret, 14:04',
    isMarked: false,
  },
]
