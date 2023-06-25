import Image from 'next/image'

import Img_message from '/public/image/send-message-rafiki.svg'
import { useRouter } from 'next/router'
import { hideEmail } from '@/utils'
import { useRef, useState } from 'react'
import Button from '@/component/Button'
import api from '@/services/api'
import { toast } from 'react-toastify'

export default function OtpPage() {
  const router = useRouter()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const otpInputs = useRef([])

  function handleChange(e, index) {
    const value = e.target.value
    if (value !== '') {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Move to next
      if (index < otpInputs.current.length - 1 && value !== '') {
        otpInputs.current[index + 1].focus()
      }
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      e.preventDefault() // Prevent the default behavior of the key

      // Move focus to the previous input field on backspace or delete
      if (index > 0) {
        otpInputs.current[index - 1].focus()
      }

      // Clear the current digit
      const newOtp = [...otp]
      newOtp[index] = ''
      setOtp(newOtp)
    }
  }

  async function submit() {
    const body = {
      email: router.query.email,
      otp: otp.join(''),
    }

    try {
      const { data } = await api.post('/auth/verify-otp', body)
      if (data.status) {
        toast.success('your email has been verified')
        router.push('/')
      }
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }

  async function resentOtp() {
    try {
      const { data } = await api.post('auth/resend-otp', {
        email: router.query.email,
      })
      toast.success(data.message)
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }

  return (
    <div className='max-w-[900px] mx-auto pt-10'>
      <Image
        src={Img_message}
        alt='illustration'
        width={200}
        className='h-fit mx-auto'
      />
      <h1 className='text-lg text-slate-800 font-medium text-center mt-2'>
        Masukkan Kode Verifikasi
      </h1>
      <p className='max-w-[400px] mx-auto text-center mt-2 text-sm text-slate-400'>
        Kode verifikasi sudah kami kirim melalui email{' '}
        {router.query.email !== undefined
          ? hideEmail(router.query.email)
          : null}
      </p>
      <div className='flex gap-4 justify-center mt-8'>
        {otp.map((digit, index) => (
          <div
            key={index}
            className='h-16 md:h-20 w-10 md:w-16 flex items-center justify-center rounded bg-slate-200'
          >
            <input
              type='text'
              className='w-10 text-lg text-center bg-transparent outline-none'
              maxLength='1'
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(input) => (otpInputs.current[index] = input)}
              autoFocus={index == 0}
            />
          </div>
        ))}
      </div>
      <div className='mt-8 flex flex-col items-center justify-center gap-2'>
        <Button
          onClick={submit}
          className='px-10 py-3 text-sm bg-[#4642FF] rounded text-white'
        >
          Verifikasi
        </Button>
        <Button onClick={resentOtp} className='mt-2 text-sm text-gray-500'>
          Kirim kode lagi
        </Button>
      </div>
    </div>
  )
}
