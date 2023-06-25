import React, { forwardRef, useMemo } from 'react'
import Button from '../Button'
import { useSelector } from 'react-redux'
import { selectNotif } from '@/redux/reducers/notifications'
import CardNotifications from '../Card/CardNotifications'
import Cookies from 'js-cookie'
import axios from 'axios'

const NotificationModal = forwardRef((props, ref) => {
  const { data } = useSelector(selectNotif)

  async function handleNotif(id) {
    try {
      const jwt = Cookies.get('jwt')
      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `https://final-project-be-develop.up.railway.app/notifications/${id}`,
        headers: {
          Authorization: jwt,
        },
      }
      const { data } = await axios.request(config)
      console.log(data)
    } catch (err) {}
  }

  const sortNotifications = useMemo(() => {
    if(!data) return
    const tmp = [...data]
    return tmp.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  }, [data])

  return (
    <div
      ref={ref}
      className='absolute top-9 right-0 w-[500px] h-auto rounded-lg bg-white p-4'
    >
      <div className='flex justify-between items-center pb-2 border-b border-gray-200'>
        <div className='flex gap-3 items-center'>
          <p className='text-slate-600 text-sm'>Notifikasi</p>
          <div className='w-5 h-5 rounded-lg bg-[#326BF1] flex items-center justify-center text-white text-sm'>
            {sortNotifications.filter((data) => data.is_read === false).length}
          </div>
        </div>
        <Button className='text-[#326BF1] text-xs'>Sudah dibaca</Button>
      </div>
      <div className='flex flex-col rounded'>
        {sortNotifications.map((data, index) => (
          <CardNotifications
            key={index}
            data={data}
            index={index}
            handleNotif={handleNotif}
            lenght={dataNotif.length}
          />
        ))}
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
