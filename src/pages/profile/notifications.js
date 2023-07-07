import { ProfileLayout } from '@/component/Layout'
import Cookies from 'js-cookie'
import { useCallback, useEffect, useMemo } from 'react'

import { selectAuth } from '@/redux/reducers/auth'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectNotif,
  setNotifications,
  updateNotifications,
} from '@/redux/reducers/notifications'

import CardNotifications from '@/component/Card/CardNotifications'
import api from '@/services/api'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

function Notifications() {
  const { t } = useTranslation()
  const { user } = useSelector(selectAuth)
  const { data } = useSelector(selectNotif)
  const dispatch = useDispatch()
  const router = useRouter()

  async function handleNotif(id) {
    try {
      const jwt = Cookies.get('jwt')
      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/notifications/${id}`,
        headers: {
          Authorization: jwt,
        },
      }
      const { data } = await axios.request(config)
      if (data.status) {
        dispatch(updateNotifications({ id }))
      }
    } catch (err) {}
  }

  useEffect(() => {
    if (!user && data) return
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
  }, [user, dispatch])

  const sortNotifications = useMemo(() => {
    if (!data) return
    const tmp = [...data]
    return tmp.sort((a, b) => b.id - a.id)
  }, [data])

  return (
    <div className='max-w-[540px]'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <h1 className='text-lg'>{t('Notification_title')}</h1>
          {data && data.length > 0 ? (
            <>
              <div className='w-6 h-6 rounded-lg bg-[#4642FF] flex items-center justify-center text-white text-sm'>
                {data.filter((data) => data.is_read === false).length}
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className='mt-4 flex flex-col border border-gray-200 rounded'>
        {data && data.length > 0
          ? sortNotifications.map((data, index) => (
              <CardNotifications
                key={index}
                data={data}
                index={index}
                handleNotif={handleNotif}
                length={dataNotif.length}
                locale={router.locale}
              />
            ))
          : null}
      </div>
    </div>
  )
}

Notifications.getLayout = (page) => {
  return <ProfileLayout location='notifications'>{page}</ProfileLayout>
}

Notifications.auth = { hasLoggedIn: true }

export default Notifications

const dataNotif = [
  {
    type: 'promosi',
    title: 'Dapatkan potongan 50% tiket!',
    message: 'syarat dan ketentuan berlaku',
    date: '20 maret, 14:04',
    isMarked: true,
  },
  {
    type: 'notifikasi',
    title:
      'Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!',
    message: '',
    date: '5 maret, 14:04',
    isMarked: false,
  },
  {
    type: 'promosi',
    title: 'Dapatkan potongan 50% tiket!',
    message: 'syarat dan ketentuan berlaku',
    date: '20 maret, 14:04',
    isMarked: false,
  },
  {
    type: 'promosi',
    title: 'Dapatkan potongan 50% tiket!',
    message: 'syarat dan ketentuan berlaku',
    date: '20 maret, 14:04',
    isMarked: false,
  },
]
