import Button from '@/component/Button'
import { LoginWithGoogle } from '@/redux/actions/authActions'
import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

export default function LoginGoogle({ isLogin, toggleModal }) {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  async function LoginGoogleAction(access_token) {
    dispatch(LoginWithGoogle(access_token, toggleModal))
  }

  const handleLogin = useGoogleLogin({
    onSuccess: (res) => {
      LoginGoogleAction(res.access_token)
    },
  })

  return (
    <Button
      className='py-3 rounded bg-gray-200 hover:bg-gray-300 text-slate-800 font-medium w-full text-sm'
      onClick={handleLogin}
    >
      {isLogin ? t('login_sign_google') : t('register_sign_google')}
    </Button>
  )
}
