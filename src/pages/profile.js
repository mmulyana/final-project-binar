import React from 'react'
import { SecondaryLayout } from '@/component/Layout'
import Image from 'next/image'
import Ic_edit from 'public/icon/edit.svg'
import Ic_settings from 'public/icon/settings.svg'
import Ic_logout from 'public/icon/logout.svg'

function ProfileCard() {
  return (
    <SecondaryLayout>
      <div className=' pt-[84px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[320px_820px] items-start justify-between gap-y-6 mt-4 max-w-[1200px] mx-auto px-4 lg:px-0'>
        <div className='bg-white my-4 border-b border-gray-100 pb-4'>
          <div className='flex my-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer m-auto'>
            <Image
              className='text-2xl text-gray-600 '
              src={Ic_edit}
              alt='icon edit'
            />
            <h3 className='text-base text-gray-800 font-semibold '>
              Ubah Profil
            </h3>
          </div>
          <hr></hr>
          <div className='flex my-2 justify-start items-center gap-4 pl-5  p-2 rounded-md group cursor-pointer m-auto'>
            <Image
              className='text-2xl text-gray-600 '
              src={Ic_settings}
              alt='icon settings'
            />
            <h3 className='text-base text-gray-800 font-semibold '>
              Pengaturan Akun
            </h3>
          </div>
          <hr></hr>
          <div className='flex  my-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer m-auto'>
            <Image
              className='text-2xl text-gray-600'
              src={Ic_logout}
              alt='icon logout'
            />
            <h3 className='text-base text-gray-800  font-semibold '>Keluar</h3>
          </div>
          <hr></hr>
        </div> 
        <div
          className='bg-white p-8 rounded-lg shadow-md'
          style={{ width: '518px', height: '462px', marginLeft: '24px' }}
        >
          <h2 className='text-2xl font-bold mb-4'>Ubah Data Profil</h2>
          <div className='flex items-center justify-center bg-purple-500 rounded-tl-lg h-12 mb-4'>
            <p className='text-white font-bold'>Data Diri</p>
          </div>
          <div className='mb-4'>
            <p className='text-blue-500 mb-1 font-bold'>Nama Lengkap</p>
            <input
              type='text'
              className='w-full p-2 border border-gray-500 rounded'
            />
          </div>
          <div className='mb-4'>
            <p className='text-blue-500 mb-1 font-bold'>Nomor Telepon</p>
            <input
              type='text'
              className='w-full p-2 border border-gray-500 rounded'
            />
          </div>
          <div className='mb-4'>
            <p className='text-blue-500 mb-1 font-bold'>Email</p>
            <input
              type='text'
              className='w-full p-2 border border-gray-500 rounded'
            />
          </div>
          <div className='flex justify-center'>
            <button className='bg-purple-900 text-white py-2 px-4 rounded'>
              Simpan
            </button>
          </div>
        </div>
      </div>
    </SecondaryLayout>
  )
}

export default ProfileCard
