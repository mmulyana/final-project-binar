import Button from '@/component/Button'
import Textfield from '@/component/Form/Textfield'
import { SecondaryLayout } from '@/component/Layout'
import Image from 'next/image'
import { useState } from 'react'
import img from 'public/image/check-img.svg'
import axios from 'axios'
import api from '@/services/api'
import { TicketHistory } from '@/component/Ticket'

export default function CheckPage() {
  const [id, setId] = useState('')
  const [transaction, setTransaction] = useState(null)

  async function handleCheck() {
    try {
      const { data } = await api(`/transactions?transaction_id=${id}`)
      // console.log(data)
      if (data.status) {
        setTransaction(data.data)
      }
    } catch (error) {
      console.log(error)
      // if(axios.isAxiosError()) {}
    }
  }

  return (
    <div className='pt-20 max-w-[1200px] mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-6 mt-10 items-start'>
        <div className='p-8 pt-10 bg-white rounded-lg'>
          <Textfield
            className='bg-white text-sm'
            name='id'
            id='id'
            label='No. Pesanan'
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder='123xxx'
            autoFocus
            withLabel
          />
          <Button
            onClick={handleCheck}
            className='py-4 rounded bg-[#4642FF] text-white font-medium w-full mt-8 hover:shadow hover:shadow-[#4642FF]/50 select-none'
          >
            Cek
          </Button>
        </div>
        <div className='flex items-start justify-center w-full px-4'>
          {transaction ? (
            <TicketHistory data={transaction} />
          ) : (
            <Image src={img} alt='check transaction' className='w-[320px]' />
          )}
        </div>
      </div>
    </div>
  )
}

CheckPage.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}
