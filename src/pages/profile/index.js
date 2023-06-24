import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import { ProfileLayout } from '@/component/Layout'
import { removeUser, selectAuth } from '@/redux/reducers/auth'
import api from '@/services/api'
import { logout } from '@/utils/authUtils'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Profile() {
  const { user } = useSelector(selectAuth)
  const dispatch = useDispatch()
  const [data, setData] = useState({
    name: 'Rengoku kyojuro',
    phoneNumber: '123456789',
    email: 'rengoku@hashira.com',
  })

  async function handleDeleteAccount() {
    try {
      const { data } = await api.delete(`users/${user.auth}`)

      if(data.status) {
        logout()
        dispatch(removeUser())
      }

    } catch(err) {}
  }

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
          <Textfield label='Email' value={data.email} withLabel disabled />
        </div>
        <div className='flex justify-between items-center mt-4'>
          <Button onClick={handleDeleteAccount} className='text-red-400 rounded text-sm capitalize'>
            hapus akun
          </Button>
          <Button className='bg-[#4642FF] text-white py-2 px-4 rounded text-sm'>
            Simpan
          </Button>
        </div>
      </div>
    </>
  )
}

Profile.getLayout = (page) => {
  return <ProfileLayout location='profile'>{page}</ProfileLayout>
}

Profile.auth = { hasLoggedIn: true }

export default Profile
