import Textfield from '@/component/Form/Textfield'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import { ProfileLayout } from '@/component/Layout'
import { useState } from 'react'

function Profile() {
  const [data, setData] = useState({
    name: 'Rengoku kyojuro',
    phoneNumber: '123456789',
    email: 'rengoku@hashira.com',
  })
  return (
    <>
      <div className='bg-white p-8 rounded border border-gray-200 max-w-[540px]'>
        <p className='text-sm mb-5'>Data Diri</p>
        <div className='flex flex-col gap-6'>
          <Textfield label='name lengkap' value={data.name} withLabel />
          <TextfieldPhone
            label='no. handphone'
            value={data.phoneNumber}
            withLabel
          />
          <Textfield label='Email' value={data.email} withLabel />
        </div>
        <button className='bg-[#4642FF] text-white py-2 px-4 rounded mt-4 text-sm block ml-auto'>
          Simpan
        </button>
      </div>
    </>
  )
}

Profile.getLayout = (page) => {
  return <ProfileLayout location='profile'>{page}</ProfileLayout>
}

Profile.auth = { hasLoggedIn: true }

export default Profile
