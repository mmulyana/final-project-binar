import React, { useState } from 'react'
import Image from 'next/image'
import Logo from 'public/image/logo.svg'
import Illustration from 'public/image/illustration.svg'
import { useRouter } from 'next/router'

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const router = useRouter()

  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    setIsPasswordVisible((prevState) => !prevState)
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.push('/')
  }

  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row min-h-screen w-full bg-white'>
        <div className='w-full lg:w-1/2 flex flex-col pt-16 pb-0 bg-no-repeat bg-cover bg-center bg-gradient-to-b from-[#DEC9FF]'>
          <Image
            className='float-none pl-16 pb-0'
            width='260'
            src={Logo}
            alt='logo'
          />
          <Image
            className='float-none w-[680px]'
            src={Illustration}
            alt='banner-illustration'
          />
        </div>
        <div className='w-full lg:w-1/2 py-[9rem] px-[7rem]'>
          <h2 className='text-2xl mb-4 font-bold'>Masuk</h2>
          <form onSubmit={handleSubmit}>
            <div className='p-1'>
              <label className='block mb-2 text-xs font-medium text-black'>
                Email/No Telepon
              </label>
              <input
                type='text'
                id='default-input'
                placeholder='Contoh: johndoe@gmail.com'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              />
            </div>

            <div className='p-1'>
              <label>
                <a className='mb-2 text-xs font-medium text-black float-left'>
                  Password
                </a>
                <a
                  className='mb-2 text-xs font-medium text-[#7126B5] float-right'
                  href='#'
                >
                  Lupa Kata Sandi
                </a>
              </label>
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder='Password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white '
              />
              <button
                className='absolute flex right-[8rem] mt-[-2rem] items-center   text-gray-600'
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className='mt-5'>
              <button
                className='w-full rounded-2xl bg-[#7126B5] py-3 text-center text-white'
                type='submit'
              >
                Masuk
              </button>
            </div>

            <div className='mt-8 flex justify-center items-center'>
              <p className='font-normal text-sm'>
                Belum punya akun?
                <a className='font-bold text-sm text-[#7126B5]' href=''>
                  Daftar di sini
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
