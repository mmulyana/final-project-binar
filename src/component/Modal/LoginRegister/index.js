import { useState } from 'react'
import Image from 'next/image'
import Button from '../../Button'
import withModal from '../withModal'
import Login from './Login'
import Register from './Register'
import { useTranslation } from 'react-i18next'

function LoginRegister({ toggleModal }) {
  const [isLogin, setIsLogin] = useState(true)
  const { t } = useTranslation()

  return (
    <div className='fixed w-fit left-1/2 top-6 -translate-x-1/2 h-fit z-[60] bg-white rounded-lg py-8'>
      <div>
        <Button
          onClick={toggleModal}
          className='h-10 w-10 rounded-full flex items-center justify-center bg-[#F4F4F4] absolute right-4 top-4'
        >
          <Image
            src='/icon/close.svg'
            alt='close modal register or login'
            width={24}
            height={24}
          />
        </Button>

        <div className='flex justify-center'>
          <Image
            src='/image/flying-around.svg'
            alt='illustration for modal'
            height={72}
            width={72}
          />
        </div>

        <p className='text-center mt-4 text-xl font-medium capitalize text-[#131316]'>
          {isLogin ? t('login_title') : t('register_title')}
        </p>
      </div>
      <div className='w-[400px] max-h-[300px] pl-8 pr-6 relative overflow-y-auto'>
        {isLogin ? (
          <Login toggleModal={toggleModal} />
        ) : (
          <Register toggleModal={toggleModal} />
        )}
      </div>
      <div className='mt-6 text-center overflow-y-auto'>
        {isLogin ? (
          <p>
            {t('login_to_register')}
            <Button
              onClick={() => setIsLogin(false)}
              className='text-[#4642FF]'
            >
              {t('login_to_register_message')}
            </Button>
          </p>
        ) : (
          <p>
            {t('register_to_login')}
            <Button onClick={() => setIsLogin(true)} className='text-[#4642FF]'>
              {t('register_to_login_message')}
            </Button>
          </p>
        )}
      </div>
    </div>
  )
}

const LoginRegisterModal = withModal(LoginRegister)
export default LoginRegisterModal
