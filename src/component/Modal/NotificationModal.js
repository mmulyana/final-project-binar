import React, { forwardRef, useMemo } from 'react'
import CardNotifications from '../Card/CardNotifications'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateNotifications } from '@/redux/reducers/notifications'
import { useTranslation } from 'react-i18next'

const NotificationModal = forwardRef((props, ref) => {
  const { data: dataNotif } = props
  const dispatch = useDispatch()
  const { t } = useTranslation()

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
      console.log(data)
      if (data.status) {
        dispatch(updateNotifications({ id }))
      }
    } catch (err) {
      console.log(err)
    }
  }

  const sortNotifications = useMemo(() => {
    if (!dataNotif) return
    const tmp = [...dataNotif]
    return tmp.sort((a, b) => b.id - a.id)
  }, [dataNotif])

  console.log(sortNotifications)

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
      <div className='h-[calc(100%-1.6rem)] overflow-y-auto pr-4 pt-2'>
        <div className='flex flex-col rounded'>
          {dataNotif && dataNotif.length > 0 ? (
            sortNotifications.map((data, index) => (
              <CardNotifications
                key={index}
                data={data}
                index={index}
                handleNotif={handleNotif}
                length={dataNotif.length}
              />
            ))
          ) : (
            <p className='text-sm text-slate-500 text-center mt-4'>
              {t('notif_empty')}
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
