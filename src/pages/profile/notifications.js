import { ProfileLayout } from '@/component/Layout'
import { selectAuth } from '@/redux/reducers/auth'
import { useSelector } from 'react-redux'
import Button from '@/component/Button'
import api from '@/services/api'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import CardNotifications from '@/component/Card/CardNotifications'

function Notifications() {
  const { user } = useSelector(selectAuth)

  async function getNotification() {
    try {
      const jwt = Cookies.get('jwt')
      const { data } = await api(`/notifications?user_id=${user.id}`, {
        headers: {
          Authorization: jwt,
        },
      })
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(!user) return
    
    getNotification()
  }, [])

  return (
    <div className='max-w-[540px]'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <h1 className='text-lg'>Notifikasi</h1>
          <div className='w-6 h-6 rounded-lg bg-[#4642FF] flex items-center justify-center text-white text-sm'>
            {dataNotif.filter((data) => data.isMarked === false).length}
          </div>
        </div>
        <Button className='text-sm text-[#4642FF]'>Sudah dibaca</Button>
      </div>
      <div className='mt-4 flex flex-col border border-gray-200 rounded'>
        {dataNotif.map((data, index) => (
          <CardNotifications data={data} index={index} lenght={dataNotif.length}/>
        ))}
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
