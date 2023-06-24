import { selectAuth } from '@/redux/reducers/auth'
import { Navbar } from '../Navbar'
import Avvvatars from 'avvvatars-react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function ProfileLayout({ children, location }) {
  const { user } = useSelector(selectAuth)

  return (
    <>
      <Navbar isDark />
      <div className='pt-[84px] pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_3fr] items-start justify-between gap-6 max-w-[1200px] mx-auto px-4 lg:px-0'>
        <div className='bg-white border border-gray-200 p-4 rounded mt-6'>
          <div className='flex items-center gap-2 pb-4 border-b border-gray-200'>
            <Avvvatars size={50} value={user?.email} />
            <div>
              <p className='text-sm text-slate-800'>{user?.name}</p>
              <p className='text-xs text-slate-500'>{user?.email}</p>
            </div>
          </div>

          <div className='mt-2'>
            {menus.map((menu, index) => (
              <Link
                key={index}
                className={[
                  'flex justify-start items-center gap-4 p-2 rounded-md cursor-pointer py-3 mb-2',
                  location === menu.name
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'hover:bg-gray-200',
                ].join(' ')}
                href={menu.name !== 'logout' ? menu.href : '/'}
              >
                <div>{menu.img}</div>
                <h3 className='text-sm text-gray-500'>{menu.title}</h3>
              </Link>
            ))}
          </div>
        </div>
        <div className='mt-6'>{children}</div>
      </div>
    </>
  )
}

const menus = [
  {
    name: 'profile',
    href: '/profile',
    title: 'Ubah Profile',
    img: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 20H21M3.00003 20H4.67457C5.16376 20 5.40835 20 5.63852 19.9447C5.84259 19.8957 6.03768 19.8149 6.21663 19.7053C6.41846 19.5816 6.59141 19.4086 6.93732 19.0627L19.5001 6.49998C20.3285 5.67156 20.3285 4.32841 19.5001 3.49998C18.6716 2.67156 17.3285 2.67156 16.5001 3.49998L3.93729 16.0627C3.59139 16.4086 3.41843 16.5816 3.29475 16.7834C3.18509 16.9624 3.10428 17.1574 3.05529 17.3615C3.00003 17.5917 3.00003 17.8363 3.00003 18.3255V20Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    name: 'notifications',
    href: '/profile/notifications',
    title: 'Notifikasi',
    img: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    name: 'history',
    href: '/profile/history',
    title: 'Pembelian',
    img: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    name: 'logout',
    title: 'Keluar',
    img: (
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
    ),
  },
]
