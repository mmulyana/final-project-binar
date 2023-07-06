import React, { forwardRef, useMemo, useState } from 'react'
import Button from '../Button'
import CardNotifications from '../Card/CardNotifications'
import Cookies from 'js-cookie'
import axios from 'axios'
import { setNotifications } from '@/redux/reducers/notifications'
import api from '@/services/api'
import { useSelector } from 'react-redux'
import { selectAuth } from '@/redux/reducers/auth'

const NotificationModal = forwardRef((props, ref) => {
  const { data } = props
  const [notif, setNotif] = useState(data)
  const { user } = useSelector(selectAuth)

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
      getNotification()
    } catch (err) {}
  }

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
        setNotif(data.data)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const sortNotifications = useMemo(() => {
    if (!data) return
    const tmp = [...data]
    return tmp.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  }, [notif])

  return (
    <div
      ref={ref}
      className='absolute top-9 right-0 w-[500px] h-[400px] rounded-lg bg-white py-4 pl-4 shadow'
    >
      <div className='flex justify-between items-center pb-2 pr-4 border-b border-gray-200'>
        <div className='flex gap-3 items-center'>
          <p className='text-slate-600 text-sm'>Notifikasi</p>
        </div>
      </div>
      <div className='h-full overflow-y-auto pr-4'>
        <div className='flex flex-col rounded'>
          {sortNotifications && sortNotifications.length > 0 ? (
            sortNotifications.map((data, index) => (
              <CardNotifications
                key={index}
                data={data}
                index={index}
                handleNotif={handleNotif}
                lenght={dataNotif.length}
              />
            ))
          ) : (
            <p className='text-sm text-slate-500 text-center mt-4'>
              belum ada notifikasi
            </p>
          )}
        </div>
      </div>
    </div>
  )
})

NotificationModal.displayName = 'NotificationModal'

export default NotificationModal

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
