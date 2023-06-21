import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import TextfieldPassword from '@/component/Form/TextfieldPassword'
import { setUser } from '@/redux/reducers/auth'
import api from '@/services/api'
import { parseJwt } from '@/utils'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const initialValues = {
  email: '',
  password: '',
}

export default function Login({ toggleModal }) {
  const [form, setForm] = useState(initialValues)
  const dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const { data } = await api.post('auth/login', form)
      if (data.status) {
        const jwt = parseJwt(data.data.token)
        Cookies.set('jwt', jwt, { expires: 1 })
        Cookies.set('id', jwt.id, { expires: 1 })

        const { data: dataProfile } = await api(`/users/${jwt.id}`)
        dispatch(setUser(dataProfile.data))
        toggleModal()
      }
    } catch (err) {}
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
