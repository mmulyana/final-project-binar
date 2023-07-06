import React, { forwardRef } from 'react'
import Button from '../Button'
import Avvvatars from 'avvvatars-react'
import Link from 'next/link'
import { logout } from '@/utils/authUtils'
import { useDispatch } from 'react-redux'
import { removeUser } from '@/redux/reducers/auth'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Ic_Setting from 'public/icon/settings.svg'
import Ic_Logout from 'public/icon/logout-1.svg'

const MenuModal = forwardRef((props, ref) => {
  const { t } = useTranslation()
  const { data } = props
  const dispatch = useDispatch()

  function handleLogout() {
    logout()
    dispatch(removeUser())
  }

  return (
    <div
      ref={ref}
      className={[
        'absolute top-9 right-0 rounded-lg bg-white p-4 shadow',
        props.className ?? '',
      ].join(' ')}
    >
      <div className='flex gap-2 items-center pb-2 border-b border-gray-200'>
        <div className='w-10'>
          <Avvvatars value={data.email} size={40} />
        </div>
        <div>
          <p className='text-xs text-slate-600 font-semibold'>
            {data.name} {}
          </p>
          <p className='text-xs text-slate-400'>{data.email}</p>
        </div>
      </div>

      <div className='flex flex-col gap-1 mt-3'>
        <Link
          className='p-2 hover:bg-gray-100 rounded text-sm text-slate-600 flex gap-2 items-center'
          href='/profile'
        >
          <Image src={Ic_Setting} width={20} height={20} alt='open setting' />
          {t('menu_setting')}
        </Link>
        <Button
          onClick={handleLogout}
          className='p-2 hover:bg-gray-100 rounded text-sm text-slate-600 flex gap-2 items-center'
        >
          <div>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          {t('menu_close')}
        </Button>
      </div>
    </div>
  )
})

MenuModal.displayName = 'MenuModal'

export default MenuModal
