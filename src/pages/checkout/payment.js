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
import { useEffect, useState } from 'react'
import { changeToRupiah } from '@/utils'
import api from '@/services/api'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

function Payment() {
  const router = useRouter()
  const [query, setQuery] = useState(null)
  const {t} = useTranslation()

  useEffect(() => {
    if (router.isReady) {
      setQuery(router.query)
    }
  }, [router.isReady, router.query])

  async function handlePay() {
    try {
      const body = {
        "transaction_id": query.tr
      }
      const jwt = Cookies.get('jwt')
      const { data } = await api.post(`/payments`, body, {
        headers: {
          Authorization: jwt
        }
      })

      if(data.status) {
        router.push(`/checkout/success?id=${query.tr}&t=${query.t}&tm=${query.tm}&mt=credit card`)
      }
    } catch(err) {
      toast.error(err.response.data.message)
    }
  }

  return (
    <div className='pt-8'>
      <div className='px-4 lg:px-0'>
        <p className='text-xl text-gray-800'>{t('payment_title')}</p>
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
            {t('payment_btn')}
          </Button>
        </div>
        <div className='bg-white rounded py-4'>
          <div className='flex items-center gap-2 pb-6 relative px-4'>
            <Image src={Ic_Ticket} alt='ticket code' />
            <p className='text-sm'>{query?.tr}</p>
            <div className='w-5 h-5 bg-[#F0F1F6] rounded-full absolute -left-[10px] bottom-0' />
            <div className='w-5 h-5 bg-[#F0F1F6] rounded-full absolute -right-[10px] bottom-0' />
            <div className='w-[90%] border border-dashed border-gray-200 absolute bottom-[10px] left-1/2 -translate-x-1/2' />
          </div>

          <div className='flex flex-col items-center gap-2 mt-3 px-4'>
            <div className='flex items-center justify-center gap-4 pt-2 pb-3'>
              <p className='text-left text-base text-slate-700'>
                {query?.dc}{' '}
                <span className='text-sm font-semibold text-slate-800'>
                  ({query?.or})
                </span>
              </p>
              <Image
                src={Ic_plane}
                width={22}
                height={22}
                alt={`plane destination to ${query?.dc}`}
              />
              <p className='text-right text-base text-slate-700'>
                {query?.ac}{' '}
                <span className='text-sm font-semibold text-slate-800'>
                  ({query?.ds})
                </span>
              </p>
            </div>

            <div className='grid grid-cols-2 justify-between w-full'>
              <div className='text-left'>
                <p className='text-xs text-gray-400'>{t('payment_total')}</p>
                <p className='text-sm mt-1 font-medium text-gray-800'>{changeToRupiah(query?.t)}</p>
              </div>
              <div className='text-right'>
                <p className='text-xs text-gray-400'>{t('payment_class')}</p>
                <p className='text-sm mt-1 font-medium text-gray-800'>{query?.c}</p>
              </div>
            </div>
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
        <Image src={Ic_Ae} width={24} className='h-fit object-cover' alt='logo credit card' />
        <Image src={Ic_Ma} width={24} className='h-fit object-cover' alt='logo credit card' />
        <Image src={Ic_Vs} width={24} className='h-fit object-cover' alt='logo credit card' />
      </div>
    </div>
  )
}
