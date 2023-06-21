import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import TextfieldPassword from '@/component/Form/TextfieldPassword'
import api from '@/services/api'
import React, { useState } from 'react'

const initialValues = {
  email: '',
  password: '',
}

export default function Login({ toggleModal }) {
  const [form, setForm] = useState(initialValues)

  async function handleSubmit(e) {
    e.preventDefault()

    toggleModal()
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

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
        />
        <TextfieldPassword
          name='password'
          id='password'
          label='Password'
          value={form.password}
          onChange={handleChange}
        />
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
}
