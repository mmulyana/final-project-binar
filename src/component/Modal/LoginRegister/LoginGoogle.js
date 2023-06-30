import Button from '@/component/Button'
import { LoginWithGoogle } from '@/redux/actions/authActions'
import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function LoginGoogle() {
  const dispatch = useDispatch()

  async function LoginGoogleAction(access_token) {
    dispatch(LoginWithGoogle(access_token))
  }

  const handleLogin = useGoogleLogin({
    onSuccess: (res) => {
      LoginGoogleAction(res.access_token)
    },
  })

  return (
    <Button
      className='flex items-center justify-center py-4 rounded-full bg-white border border-gray-500 text-gray-500 font-medium w-full mt-8 text-center'
      onClick={handleLogin}
    >
      Masuk dengan google
    </Button>
  )
}
