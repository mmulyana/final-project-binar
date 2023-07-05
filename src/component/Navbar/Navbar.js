import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser, selectAuth, setUser } from '@/redux/reducers/auth'
import { selectNotif, setNotifications } from '@/redux/reducers/notifications'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Button from '../Button'
import Cookies from 'js-cookie'

import LoginRegisterModal from '../Modal/LoginRegister'
import MenuModal from '../Modal/MenuModal'
import Avvvatars from 'avvvatars-react'
import NotificationModal from '../Modal/NotificationModal'

import Ic_Close from 'public/icon/close.svg'
import Ic_Logout from 'public/icon/logout.svg'
import { logout } from '@/utils/authUtils'
import { useRouter } from 'next/router'
import api from '@/services/api'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const handleClickOutside = (event, ref, setOpen) => {
  if (ref.current && !ref.current.contains(event.target)) {
    setOpen(false)
  }
}

export default function Navbar({ isDark = false }) {
  const notificationRef = useRef(null)
  const menuRef = useRef(null)
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [openNotify, setOpenNotify] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [offset, setOffset] = useState(0)
  // untuk menu di mobile
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const dispatch = useDispatch()

  const { user } = useSelector(selectAuth)
  const { data } = useSelector(selectNotif)

  useEffect(() => {
    if (user) return
    const profile = Cookies.get('profile')
    if (profile) {
      dispatch(setUser(JSON.parse(profile)))
    }
  }, [user, dispatch])

  useEffect(() => {
    if (!user) return
    async function getNotification() {
      try {
        const jwt = Cookies.get('jwt')
        const { data } = await api(`/notifications?user_id=${user.id}`, {
          headers: {
            Authorization: jwt,
          },
        })
        if (data.status) {
          dispatch(setNotifications(data.data))
        }
      } catch (err) {
        console.log(err.message)
      }
    }

    getNotification()
  }, [dispatch, user])

  useEffect(() => {
    const handleClick = (event) => {
      handleClickOutside(event, notificationRef, setOpenNotify)
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [notificationRef, setOpenNotify])

  useEffect(() => {
    const handleClick = (event) => {
      handleClickOutside(event, menuRef, setOpenMenu)
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [menuRef, setOpenNotify])

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 w-full pt-4 h-[80px]',
          openMenu ? 'z-[60]' : 'z-50',
        ].join(' ')}
      >
        <div
          className={[
            'absolute top-0 left-0 h-full w-full duration-75 ease-in',
            !isDark
              ? offset > 0
                ? 'bg-white'
                : 'bg-gradient-to-b from-black/40 to-black/0'
              : 'bg-white',
          ].join(' ')}
        ></div>
        <div className='container max-w-[1200px] h-full px-4 lg:px-0 mx-auto flex items-center justify-between relative z-10 pb-4 border-b border-white/80'>
          <MediaQuery minWidth={786}>
            <div className='flex items-center gap-14'>
              <Link
                href='/'
                className={[
                  'text-2xl font-semibold',
                  !isDark
                    ? offset > 0
                      ? 'text-slate-800'
                      : 'text-white'
                    : 'text-slate-800',
                ].join(' ')}
              >
                Tripp
              </Link>
              <nav className='flex items-center gap-4'>
                <Link
                  href='/ticket/check'
                  className={[
                    'text-sm px-4 py-2 rounded',
                    !isDark
                      ? offset > 0
                        ? 'text-slate-800'
                        : 'text-white hover:bg-white/20'
                      : 'text-slate-800',
                  ].join(' ')}
                >
                  Cek Pesanan
                </Link>
                <Link
                  href='/help'
                  className={[
                    'text-sm px-4 py-2 rounded',
                    !isDark
                      ? offset > 0
                        ? 'text-slate-800'
                        : 'text-white hover:bg-white/20'
                      : 'text-slate-800',
                  ].join(' ')}
                >
                  Bantuan
                </Link>
              </nav>
            </div>
            {user !== null ? (
              <div className='flex gap-4 items-center'>
                <div
                  className={[
                    'relative h-8 w-8 flex items-center justify-center rounded-full',
                    !isDark
                      ? offset > 0
                        ? 'bg-gray-100/90'
                        : 'bg-white/20'
                      : 'bg-gray-100/90',
                  ].join(' ')}
                >
                  <Button
                    className={[
                      !isDark
                        ? offset > 0
                          ? 'text-slate-800'
                          : 'text-white'
                        : 'text-slate-800',
                    ].join(' ')}
                    onClick={() => setOpenNotify(!openNotify)}
                  >
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
                  </Button>
                  {!!data && (
                    <div className='absolute -top-[5px] -right-[5px] h-4 w-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs'>
                      <p>{data.filter((d) => d.is_read === false).length}</p>
                    </div>
                  )}
                  {!!openNotify && (
                    <NotificationModal data={data} ref={notificationRef} />
                  )}
                </div>
                <div className='relative h-8 w-8'>
                  <Button onClick={() => setOpenMenu(!openMenu)}>
                    <Avvvatars value={user.email} />
                  </Button>
                  {!!openMenu && <MenuModal ref={menuRef} data={user} />}
                </div>
              </div>
            ) : (
              <Button
                onClick={() => setIsOpen(true)}
                className={[
                  'px-6 py-3 font-medium rounded shadow-sm text-sm',
                  !isDark
                    ? offset > 0
                      ? 'bg-[#326BF1] text-white'
                      : 'text-[#1E1E1E] bg-white'
                    : 'bg-[#326BF1] text-white',
                ].join(' ')}
              >
                Masuk/Daftar
              </Button>
            )}
          </MediaQuery>

          <MediaQuery maxWidth={786}>
            <Link
              href='/'
              className={[
                'text-2xl font-semibold',
                !isDark
                  ? offset > 0
                    ? 'text-slate-800'
                    : 'text-white'
                  : 'text-slate-800',
              ].join(' ')}
            >
              Tripp
            </Link>

            <Button
              onClick={() => setIsOpenMenu(true)}
              className={
                !isDark
                  ? offset > 0
                    ? 'text-slate-800'
                    : 'text-white hover:bg-white/20'
                  : 'text-slate-800'
              }
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 12H21M3 6H21M9 18H21'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Button>

            {!!isOpenMenu && (
              <>
                <div
                  className='fixed top-0 left-0 h-full w-full bg-black/60 z-[80]'
                  onClick={() => setIsOpenMenu(false)}
                />
                <div className='fixed top-0 left-0 h-fit w-full bg-white p-4 z-[80]'>
                  <div className='flex items-center justify-between pb-3 border-b border-gray-300'>
                    <Link
                      href='/'
                      className='text-2xl font-semibold text-slate-800'
                    >
                      Tripp
                    </Link>
                    <Button
                      onClick={() => setIsOpenMenu(false)}
                      className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'
                    >
                      <Image
                        src={Ic_Close}
                        alt='hide menu'
                        width={24}
                        height={24}
                      />
                    </Button>
                  </div>
                  <div className='flex flex-col gap-5 mt-4'>
                    <Link href='/ticket/check'>Cek pesanan</Link>
                    <Link href='/help'>Bantuan</Link>
                  </div>

                  {user !== null ? (
                    <div className='mt-12 mb-3 relative flex justify-between items-center'>
                      <div
                        className='flex gap-2 items-center pb-2'
                        onClick={() => router.push('/profile')}
                      >
                        <div className='w-10'>
                          <Avvvatars value={user.email} size={40} />
                        </div>
                        <div>
                          <p className='text-sm text-slate-600 font-semibold'>
                            {user.name} {}
                          </p>
                          <p className='text-xs text-slate-400'>{user.email}</p>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          setIsOpenMenu(false)
                          logout()
                          dispatch(removeUser())
                        }}
                        className='flex items-center justify-center h-10 w-10 bg-gray-100 rounded-full'
                      >
                        <Image
                          src={Ic_Logout}
                          alt='logout'
                          width={20}
                          height={20}
                        />
                      </Button>
                    </div>
                  ) : (
                    <div className='mt-12 mb-3'>
                      <Button
                        onClick={() => {
                          setIsOpenMenu(false)
                          setIsOpen(true)
                        }}
                        className='w-full py-4 rounded bg-[#326BF1] text-white'
                      >
                        Masuk/Daftar
                      </Button>
                    </div>
                  )}
                </div>
              </>
            )}
          </MediaQuery>
        </div>
      </nav>

      <LoginRegisterModal
        isOpen={isOpen}
        toggleModal={() => setIsOpen(!isOpen)}
        zIndex='60'
      />
    </>
  )
}
