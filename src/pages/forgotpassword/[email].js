import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import TextfieldPassword from '@/component/Form/TextfieldPassword'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ForgotPasswordEmail() {
  const router = useRouter()
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  })
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (router.isReady) {
      setEmail(router.query.email)
    }
  }, [router.isReady, router.query.email])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className='max-w-[420px] mx-auto pt-20 px-4'>
      <div className='mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-200 text-blue-500'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <div className='mt-3 flex flex-col gap-2 items-center'>
        <p className='text-lg text-slate-800 font-medium'>Atur password baru</p>

        <form className='mt-3 w-full flex flex-col gap-7'>
          <TextfieldPassword
            name='password'
            label='password'
            value={form.password}
            onChange={handleChange}
            className='bg-white'
          />

          <TextfieldPassword
            name='confirmPassword'
            label='confirm password'
            value={form.confirmPassword}
            onChange={handleChange}
            className='bg-white'
          />

          <Button
            type='submit'
            onClick={handleSubmit}
            className='bg-[#326BF1] text-white rounded py-3 w-full mt-2'
          >
            Kirim
          </Button>
        </form>
      </div>
    </div>
  )
}
