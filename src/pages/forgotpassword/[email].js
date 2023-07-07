import Button from '@/component/Button'
import TextfieldPassword from '@/component/Form/TextfieldPassword'
import api from '@/services/api'
import { resetPasswordSchema } from '@/utils/schema'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

export default function ForgotPasswordEmail() {
  const router = useRouter()
  const { t } = useTranslation()
  const [token, setToken] = useState(null)
  const [form, setForm] = useState({
    newPassword: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (router.isReady) {
      setToken(router.query.token)
      setEmail(router.query.email)
    }
  }, [router.isReady, router.query])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await resetPasswordSchema.validate(form, { abortEarly: false })
      const { data } = await api.patch(
        `/auth/reset-password?token=${token}`,
        form
      )
      if (data.status) {
        toast.success(data.message)
        router.replace('/')
      }
    } catch (error) {
      const errorMessages = {}
      error?.inner?.forEach((error) => {
        errorMessages[error.path] = error.message
      })
      setErrors(errorMessages)

      if (axios.isAxiosError(error)) {
        if (error.response.status === 401) {
          router.push(`/otp/${form.email}`)
          toast.error(error.response.data.message)
        }
        toast.error(error.response.data.message)
        return
      }
      toast.error(error.message)
    }
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
        <p className='text-lg text-slate-800 font-medium'>{t('reset_title')}</p>

        <form className='mt-3 w-full flex flex-col gap-7'>
          <TextfieldPassword
            name='newPassword'
            label='password'
            value={form.newPassword}
            onChange={handleChange}
            className='bg-white'
            error={errors.password ? errors.password : null}
          />

          <TextfieldPassword
            name='confirmPassword'
            label={t('i_confirm_password')}
            value={form.confirmPassword}
            onChange={handleChange}
            className='bg-white'
            error={errors.confirmPassword ? errors.confirmPassword : null}
          />

          <Button
            type='submit'
            onClick={handleSubmit}
            className='bg-[#326BF1] text-white rounded py-3 w-full mt-2'
          >
            {t('btn_send')}
          </Button>
        </form>
      </div>
    </div>
  )
}
