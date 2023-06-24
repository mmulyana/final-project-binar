import { SecondaryLayout } from '@/component/Layout'
import Image from 'next/image'
import Ic_edit from 'public/icon/edit.svg'
import Ic_settings from 'public/icon/settings.svg'
import Ic_logout from 'public/icon/logout.svg'
import React from 'react'


function Account() {

  return (
    <>
      <div className=" pt-[84px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[320px_820px] justify-between gap-y-6 mt-4 max-w-[1200px] mx-auto px-4 lg:px-0">
        <div className="bg-white my-4 border-b border-gray-100 pb-4">
          <div className="flex my-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer m-auto">
            <Image className='text-2xl text-gray-600 ' src={Ic_edit} alt='icon edit' />
            <h3 className="text-base text-gray-800 font-semibold ">
              Ubah Profil
            </h3>
          </div>
          <hr></hr>
          <div className="flex my-2 justify-start items-center gap-4 pl-5  p-2 rounded-md group cursor-pointer m-auto">
            <Image className='text-2xl text-gray-600 ' src={Ic_settings} alt='icon settings' />
            <h3 className="text-base text-gray-800 font-semibold ">
              Pengaturan Akun
            </h3>
          </div>
          <hr></hr>
          <div className="flex  my-2 justify-start items-center gap-4 pl-5 p-2 rounded-md group cursor-pointer m-auto">
            <Image className='text-2xl text-gray-600' src={Ic_logout} alt='icon logout' />
            <h3 className="text-base text-gray-800  font-semibold ">
              Keluar
            </h3>
          </div>
          <hr></hr>
          
        </div>
      </div>
    </>
  );
}
Account.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}

export default Account
