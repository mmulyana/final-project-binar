import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import api from '@/services/api'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [hasSend, setHasSend] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const body = { email }
      const { data } = await api.post('/auth/forgot-password', body)
      if(data.status) {
        setHasSend(true)
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='max-w-[420px] mx-auto pt-20 px-4'>
      {!hasSend ? (
        <>
          <div className='mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-200 text-blue-500'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 9H15.01M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H6.33726C6.58185 21 6.70414 21 6.81923 20.9724C6.92127 20.9479 7.01881 20.9075 7.10828 20.8526C7.2092 20.7908 7.29568 20.7043 7.46863 20.5314L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='mt-3 flex flex-col gap-2 items-center'>
            <p className='text-lg text-slate-800 font-medium'>
              Lupa password Anda?
            </p>
            <p className='text-slate-400 text-sm text-center'>
              Tidak perlu khawatir. Silakan berikan alamat email, dan kami akan
              mengirimkan panduan untuk melakukan penggantian kata sandi.
            </p>

            <form onSubmit={handleSubmit} className='mt-3 w-full'>
              <Textfield
                label='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-white'
                withLabel
              />

              <Button
                type='submit'
                onClick={handleSubmit}
                className='bg-[#326BF1] text-white rounded py-3 w-full mt-6'
              >
                Kirim
              </Button>
            </form>
            <Link
              href='/'
              className='mt-3 text-slate-400 text-sm text-center block'
            >
              Kembali ke beranda
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className='mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-200 text-blue-500'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='mt-3 flex flex-col gap-2 items-center'>
            <p className='text-lg text-slate-800 font-medium'>
              Cek email anda?
            </p>
            <p className='text-slate-400 text-sm text-center'>
              kami telah mengirim link reset password ke {email}
            </p>

            <p className='text-center text-sm mt-2 text-slate-600'>
              belum menerima email?{' '}
              <Button onClick={handleSubmit} className='text-[#326BF1]'>
                kirim lagi
              </Button>
            </p>
          </div>
        </>
      )}
    </div>
  )
}
