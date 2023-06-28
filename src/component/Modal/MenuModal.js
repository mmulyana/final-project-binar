import React, { forwardRef } from 'react'
import Button from '../Button'
import Avvvatars from 'avvvatars-react'
import Link from 'next/link'
import { logout } from '@/utils/authUtils'
import { useDispatch } from 'react-redux'
import { removeUser } from '@/redux/reducers/auth'

const MenuModal = forwardRef((props, ref) => {
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
          className='py-2 px-4 hover:bg-gray-100 rounded text-sm text-slate-600'
          href='/profile'
        >
          Pengaturan
        </Link>
        <Button
          onClick={handleLogout}
          className='py-2 px-4 hover:bg-gray-100 rounded text-sm text-slate-600 text-left'
        >
          Keluar
        </Button>
      </div>
    </div>
  )
})

MenuModal.displayName = 'MenuModal'

export default MenuModal
