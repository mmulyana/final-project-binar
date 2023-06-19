import { useRouter } from 'next/router'
import Image from 'next/image'
import Button from '@/component/Button'
import CreditCardCollapsible from '@/component/Collapsible/CreditCardCollapsible'
import EwalletCollapsible from '@/component/Collapsible/EwalletCollapsible'
import VirtualCollapsible from '@/component/Collapsible/VirtualCollapsible'
import { CheckoutLayout } from '@/component/Layout'

import Ic_Ae from '/public/icon/ae-card.png'
import Ic_Ma from '/public/icon/mastercard-card.png'
import Ic_Vs from '/public/icon/visa-card.webp'
import Ic_Ticket from '/public/icon/ticket.svg'
import Ic_plane from 'public/icon/plane2.svg'

function Payment() {
  const router = useRouter()

  function handlePay() {
    router.push('/checkout/success')
  }

  return (
    <div className='pt-8'>
      <div className='px-4 lg:px-0'>
        <p className='text-xl text-gray-800'>Pembayaran</p>
      </div>
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-4 justify-between items-start px-4 lg:px-0'>
        <div className='flex flex-col gap-3'>
          <EwalletCollapsible
            name='E-Wallet'
            className='px-4 rounded border shadow-sm'
          />
          <VirtualCollapsible
            name='Virtual Account'
            className='px-4 rounded border shadow-sm'
          />

          <CreditCardCollapsible
            component={<CreditCard />}
            className='px-4 rounded border shadow-sm'
          />

          <Button
            onClick={handlePay}
            className='mt-8 flex items-center justify-center bg-[#4642FF] text-white text-sm rounded font-medium py-4 w-52 ml-auto'
          >
            Bayar
          </Button>
        </div>
        <div className='bg-white rounded py-4'>
          <div className='flex items-center gap-2 pb-6 relative px-4'>
            <Image src={Ic_Ticket} alt='ticket code' />
            <p className='text-sm'>123456</p>
            <div className='w-5 h-5 bg-[#F0F1F6] rounded-full absolute -left-[10px] bottom-0' />
              <div className='w-5 h-5 bg-[#F0F1F6] rounded-full absolute -right-[10px] bottom-0' />
              <div className='w-[90%] border border-dashed border-gray-200 absolute bottom-[10px] left-1/2 -translate-x-1/2' />
          </div>

          <div className='flex items-center gap-2 mt-3 px-4'>
            <Image src={Ic_plane} alt='plane destination' />
            <p className='text-sm'>Jakarta → Yogyakarta</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Payment.getLayout = (page) => {
  return <CheckoutLayout index={2}>{page}</CheckoutLayout>
}

export default Payment

function CreditCard() {
  return (
    <div className='flex w-full items-center justify-between cursor-pointer'>
      <p>Credit Card</p>
      <div className='flex gap-2 items-center'>
        <Image src={Ic_Ae} width={24} className='h-fit object-cover' />
        <Image src={Ic_Ma} width={24} className='h-fit object-cover' />
        <Image src={Ic_Vs} width={24} className='h-fit object-cover' />
      </div>
    </div>
  )
}