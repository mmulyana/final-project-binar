import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import { ProfileLayout } from '@/component/Layout'
import DeleteAccountModal from '@/component/Modal/DeleteAccountModal'
import { selectAuth, updateUser } from '@/redux/reducers/auth'
import api from '@/services/api'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Profile() {
  const { user } = useSelector(selectAuth)
  const {t} = useTranslation()
  const [isDisable, setDisable] = useState(true)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState({
    email: '',
    name: '',
    phone_number: '',
  })

  function handleChange(e) {
    const { name, value } = e.target

    setData((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if (!user) return
    setData(user)
  }, [user])

  function handleToggle() {
    setIsOpen(!isOpen)
  }

  async function handleUpdateProfile() {
    try {
      const body = {
        name: data.name,
        phone_number: data.phone_number,
      }
      const jwt = Cookies.get('jwt')

      const res = await api.put(`users/${user.id}`, body, {
        headers: {
          Authorization: jwt,
        },
      })

      if (res.data.status) {
        dispatch(
          updateUser({
            name: data.name,
            phone_number: data.phone_number,
          })
        )
        toast.success(res.data.message)
        Cookies.set('profile', JSON.stringify(data))
        setDisable(true)
      }
    } catch (err) {
      console.log(err)
      // toast.error(err.response.data.message)
    }
  }

  function handleCancel() {
    setDisable(true)
    setData(user)
  }

  return (
    <>
      <div className='bg-white p-8 rounded border border-gray-200 max-w-[540px]'>
        <p className='text-sm mb-5'>Data Diri</p>
        <div className='flex flex-col gap-6'>
          <Textfield
            label={t('i_fullname')}
            value={data.name}
            withLabel
            disabled={isDisable}
            name='name'
            onChange={handleChange}
          />
          <TextfieldPhone
            name='phone_number'
            label='no. handphone'
            value={data.phone_number}
            onChange={handleChange}
            disabled={isDisable}
          />
          <Textfield label='Email' value={data.email} withLabel disabled />
        </div>
        <div className='flex justify-end items-center mt-4'>
          {/* <Button
            onClick={handleToggle}
            className='text-red-400 rounded text-sm capitalize'
          >
            hapus akun
          </Button> */}
          <div className='flex items-center gap-4'>
            {isDisable ? (
              <Button
                onClick={() => setDisable(false)}
                className='bg-[#4642FF] text-white py-2 px-4 rounded text-sm'
              >
                Edit profile
              </Button>
            ) : (
              <>
                <Button
                  onClick={handleCancel}
                  className='text-slate-600 py-2 px-4 rounded text-sm'
                >
                  batal
                </Button>
                <Button
                  onClick={handleUpdateProfile}
                  className='bg-[#4642FF] text-white py-2 px-4 rounded text-sm'
                >
                  Update
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* {!!isOpen && (
        <DeleteAccountModal isOpen id={data.id} toggleModal={handleToggle} />
      )} */}
    </>
  )
}

Profile.getLayout = (page) => {
  return <ProfileLayout location='profile'>{page}</ProfileLayout>
}

Profile.auth = { hasLoggedIn: true }


export default Profile
