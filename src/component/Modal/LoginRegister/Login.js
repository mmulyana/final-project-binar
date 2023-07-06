import { setUser } from '@/redux/reducers/auth'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import Link from 'next/link'
import axios from 'axios'

import TextfieldPassword from '@/component/Form/TextfieldPassword'
import Textfield from '@/component/Form/Textfield'
import Button from '@/component/Button'
import LoginGoogle from './LoginGoogle'
import { parseJwt } from '@/utils'
import api from '@/services/api'

import { loginSchema } from '@/utils/schema'
import { useTranslation } from 'react-i18next'

const initialValues = {
  email: '',
  password: '',
}

export default function Login({ toggleModal }) {
  const [form, setForm] = useState(initialValues)
  const [isEmail, setIsEmail] = useState(false)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const router = useRouter()
  const {t} = useTranslation()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await loginSchema.validate(form, { abortEarly: false })
      setErrors({})

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
    } catch (error) {
      const errorMessages = {}
      error?.inner?.forEach((error) => {
        errorMessages[error.path] = error.message
      })
      setErrors(errorMessages)

      if (axios.isAxiosError(error)) {
        if (error.response.status === 401) {
          router.push(`/otp/${form.email}`)
          toast.error(error.response.data.message)
        }
        toast.error(error.response.data.message)
        return
      }
      toast.error(error.message)
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
            withLabel
            value={form.email}
            onChange={handleChange}
            placeholder='example@mail.com'
            autoFocus
            error={errors.email ? errors.email : null}
          />
          <TextfieldPassword
            name='password'
            id='password'
            label='Password'
            value={form.password}
            onChange={handleChange}
            error={errors.password ? errors.password : null}
          />
          <Link
            href='/forgotpassword'
            className='block ml-auto -mt-4 text-sm text-[#326BF1]'
          >
            {t('btn_forgot_password')}
          </Link>
        </div>

        <Button
          onClick={handleSubmit}
          type='submit'
          className='py-4 rounded bg-[#4642FF] text-white font-medium w-full mt-8 hover:shadow hover:shadow-[#4642FF]/50'
        >
          {t('login_btn')}
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
          {t('login_sign_email')}
        </Button>
        <LoginGoogle isLogin toggleModal={toggleModal} />
      </div>
    )
  }
}
