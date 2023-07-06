import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import TextfieldPassword from '@/component/Form/TextfieldPassword'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import api from '@/services/api'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import LoginGoogle from './LoginGoogle'
import { emailSchema, registerSchema } from '@/utils/schema'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const initialValues = {
  name: '',
  email: '',
  password: '',
  phone_number: '',
  confirmPassword: '',
}

export default function Register({ toggleModal }) {
  const router = useRouter()
  const [form, setForm] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [hasFillEmail, setHasFillEmail] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const {t} = useTranslation()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await registerSchema.validate(form, { abortEarly: false })
      setErrors({})
      const response = await api.post(`/auth/register`, form)
      if (response.data.status) {
        toast.info('check your email')
        router.push(`/otp/${form.email}`)
      }
      toggleModal()
    } catch (error) {
      const errorMessages = {}
      error?.inner?.forEach((error) => {
        errorMessages[error.path] = error.message
      })
      setErrors(errorMessages)

      if (axios.isAxiosError(error)) {
        if (error.response.status === 401) {
          router.push(`/otp/${form.email}`)
          toast.error(err.response.data.message)
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

  async function handleEmail() {
    try {
      await emailSchema.validate(form, { abortEarly: false })
      setErrors({})
      setHasFillEmail(true)
    } catch (error) {
      const errorMessages = {}
      error?.inner?.forEach((error) => {
        errorMessages[error.path] = error.message
      })
      setErrors(errorMessages)
    }
  }

  if (isEmail) {
    return (
      <div>
        {!hasFillEmail ? (
          <>
            <Textfield
              name='email'
              id='email'
              label='email'
              value={form.email}
              onChange={handleChange}
              withLabel
              placeholder='example@mail.com'
              error={errors.email ? errors.email : null}
            />

            <Button
              onClick={handleEmail}
              className='py-4 rounded bg-[#4642FF] text-white font-medium w-full mt-8 hover:shadow hover:shadow-[#4642FF]/50 flex items-center justify-center cursor-pointer'
            >
              {t('register_btn_email')}
            </Button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className='mt-6'>
            <div className='flex flex-col gap-6'>
              <Textfield
                name='email'
                id='email'
                label='email'
                value={form.email}
                withLabel
                disabled
              />
              <Textfield
                name='name'
                id='name'
                label={t('i_fullname')}
                value={form.name}
                onChange={handleChange}
                withLabel
                autoFocus
                error={errors.name ? errors.name : null}
              />
              <TextfieldPhone
                name='phone_number'
                value={form.phone_number}
                onChange={handleChange}
                id='phoneNumber'
                error={errors.phone_number ? errors.phone_number : null}
              />
              <TextfieldPassword
                name='password'
                id='password'
                label='password'
                value={form.password}
                onChange={handleChange}
                error={errors.password ? errors.password : null}
              />

              <TextfieldPassword
                name='confirmPassword'
                id='confirmPassword'
                label={t('i_confirm_password')}
                value={form.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword ? errors.confirmPassword : null}
              />
            </div>
            <Button
              onClick={handleSubmit}
              type='submit'
              className='py-4 rounded bg-[#4642FF] text-white font-medium w-full mt-8 hover:shadow hover:shadow-[#4642FF]/50 cursor-pointer'
            >
              {t('register_btn')}
            </Button>
          </form>
        )}
      </div>
    )
  } else {
    return (
      <div className='mt-6 flex flex-col gap-3'>
        <Button
          className='py-3 rounded bg-gray-200 hover:bg-gray-300 text-slate-800 font-medium w-full text-sm'
          onClick={() => setIsEmail(true)}
        >
          {t('register_sign_email')}
        </Button>
        <LoginGoogle />
      </div>
    )
  }
}
