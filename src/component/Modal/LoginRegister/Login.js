import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import TextfieldPassword from '@/component/Form/TextfieldPassword'
import Cookies from 'js-cookie'
import api from '@/services/api'
import { setUser } from '@/redux/reducers/auth'
import { parseJwt } from '@/utils'
import Link from 'next/link'
import { toast } from 'react-toastify'
import LoginGoogle from './LoginGoogle'
import { useRouter } from 'next/router'

const initialValues = {
  email: '',
  password: '',
}

export default function Login({ toggleModal }) {
  const [form, setForm] = useState(initialValues)
  const [isEmail, setIsEmail] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const { data } = await api.post('auth/login', form)
      if (data.status) {
        Cookies.set('jwt', data.data.token, { expires: 1 })
        const jwt = parseJwt(data.data.token)
        Cookies.set('id', jwt.id, { expires: 1 })

        const { data: dataProfile } = await api(`/users/${jwt.id}`, {
          headers: {
            Authorization: data.data.token,
          },
        })
        Cookies.set('profile', JSON.stringify(dataProfile.data), { expires: 1 })

        dispatch(setUser(dataProfile.data))
        toggleModal()

        toast.success(`welcome back ${dataProfile.data.name}`)
      }
    } catch (err) {
      if (err.response.status === 401) {
        router.push(`/otp/${form.email}`)
        toast.error(err.response.data.message)
      }
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (isEmail) {
    return (
      <form onSubmit={handleSubmit} className='mt-6'>
        <div className='flex flex-col gap-6'>
          <Textfield
            name='email'
            id='email'
            label='email'
            value={form.email}
            onChange={handleChange}
            withLabel
            placeholder='example@mail.com'
            autoFocus
          />
          <TextfieldPassword
            name='password'
            id='password'
            label='Password'
            value={form.password}
            onChange={handleChange}
          />
          <Link
            href='/forgotpassword'
            className='block ml-auto -mt-4 text-sm text-[#326BF1]'
          >
            Lupa password?
          </Link>
        </div>

        <Button
          onClick={handleSubmit}
          type='submit'
          className='py-4 rounded bg-[#4642FF] text-white font-medium w-full mt-8 hover:shadow hover:shadow-[#4642FF]/50'
        >
          Masuk
        </Button>
      </form>
    )
  } else {
    return (
      <div className='mt-6 flex flex-col gap-3'>
        <Button
          className='py-3 rounded bg-gray-200 hover:bg-gray-300 text-slate-800 font-medium w-full text-sm'
          onClick={() => setIsEmail(true)}
        >
          Masuk dengan Email
        </Button>
        <LoginGoogle isLogin toggleModal={toggleModal} />
      </div>
    )
  }
}
