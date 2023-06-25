import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import TextfieldPassword from '@/component/Form/TextfieldPassword'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import api from '@/services/api'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

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
  const [hasFillEmail, setHasFillEmail] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const response = await api.post(`/auth/register`, form)
      if (response.data.status) {
        toast.info('check your email')
        router.push(`/otp/${form.email}`)
        localStorage.setItem('MUST_VERIFY', form.email)
      }
      toggleModal()
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='mt-6'>
        {!hasFillEmail ? (
          <Textfield
            name='email'
            id='email'
            label='email'
            value={form.email}
            onChange={handleChange}
            withLabel
            placeholder='example@mail.com'
          />
        ) : (
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
              label='nama lengkap'
              value={form.name}
              onChange={handleChange}
              withLabel
              autoFocus
            />
            <TextfieldPhone
              name='phone_number'
              value={form.phone_number}
              onChange={handleChange}
              id='phoneNumber'
            />
            <TextfieldPassword
              name='password'
              id='password'
              label='password'
              value={form.password}
              onChange={handleChange}
            />

            <TextfieldPassword
              name='confirmPassword'
              id='confirmPassword'
              label='confirm Password'
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
        )}
        {hasFillEmail ? (
          <Button
            onClick={handleSubmit}
            type='submit'
            className='py-4 rounded bg-[#4642FF] text-white font-medium w-full mt-8 hover:shadow hover:shadow-[#4642FF]/50'
          >
            Daftar
          </Button>
        ) : (
          <div
            onClick={() => {
              if (form.email !== '' && !hasFillEmail) {
                setHasFillEmail(true)
              }
            }}
            className='py-4 rounded bg-[#4642FF] text-white font-medium w-full mt-8 hover:shadow hover:shadow-[#4642FF]/50 flex items-center justify-center'
          >
            Selanjutnya
          </div>
        )}
      </form>
    </div>
  )
}
