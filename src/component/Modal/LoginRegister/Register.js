import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import TextfieldPassword from '@/component/Form/TextfieldPassword'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const initialValues = {
  name: '',
  email: '',
  password: '',
  phoneNumber: '',
}

export default function Register({ toggleModal }) {
  const router = useRouter()
  const [form, setForm] = useState(initialValues)
  const [hasFillEmail, setHasFieldEmail] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    toggleModal()

    if (typeof window !== 'undefined') {
      localStorage.setItem('MUST_VERIFY', form.email)
    }

    router.push(`otp/${form.email}`)
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
          />
        ) : (
          <div className='flex flex-col gap-6'>
            <Textfield
              name='email'
              id='email'
              label='email'
              value={form.email}
              disabled
            />
            <Textfield
              name='name'
              id='name'
              label='nama lengkap'
              value={form.name}
              onChange={handleChange}
              autoFocus
            />
            <TextfieldPhone
              name='phoneNumber'
              value={form.phoneNumber}
              onChange={handleChange}
              id='phoneNumber'
            />
            <TextfieldPassword
              name='password'
              id='password'
              label='Password'
              value={form.password}
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
                setHasFieldEmail(true)
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
