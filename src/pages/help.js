import FaqCollapsible from '@/component/Collapsible/FaqCollapsible'
import { SecondaryLayout } from '@/component/Layout'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Help() {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <div className='pt-20'>
      <section className='w-full py-12 mt-4 max-w-[1000px] px-4 mx-auto rounded-lg text-center'>
        <p className='text-blue-700 text-xs font-semibold'>FAQ</p>
        <h1 className='text-2xl mt-2 text-slate-800'>{t('faqTitle')}</h1>
        <p className='text-sm mt-1 text-slate-500'>{t('faqSubtitle')}</p>
      </section>
      <section className='max-w-[900px] mx-auto px-4 grid grid-cols-[1fr_2fr]'>
        <p className='text-lg text-slate-800'>{t('faqSectionTitle')}</p>
        <div className='flex flex-col gap-2'>
          {Faqs.map((faq, index) => (
            <FaqCollapsible
              key={index}
              className='px-4 rounded text-slate-800 text-sm border border-gray-200 cursor-pointer'
              name={faq.name[router.locale]}
              message={faq.message[router.locale]}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

Help.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}

const Faqs = [
  {
    name: {
      id: 'Bagaimana cara melakukan pengecekan pesanan?',
      en: 'How do I check an order?',
    },
    message: {
      id: 'Silahkan akses pengaturan melalui menu di navbar harus login dahulu, dan temukan opsi transaksi di menu samping.',
      en: 'Please access the settings via the menu on the navbar, you must log in first, and find the transaction options on the side menu.',
    },
  },
  {
    name: {
      id: 'Bagaimana cara melakukan pengecekan pesanan tanpa login dahulu?',
      en: 'How do I check an order without logging in first?',
    },
    message: {
      id: 'Silahkan buka halaman cek pesanan lalu masukan no. pesanan dan tekan tombol cek, jika pesanan ada akan muncul tiket disebalah kanan',
      en: 'Please open the order check page then enter no. order and press the check button, if there is an order a ticket will appear on the right',
    },
  },
  {
    name: {
      id: 'Bagaimana jika lupa password?',
      en: 'What if I forgot my password?',
    },
    message: {
      id: 'tombol lupa password ada di modal masuk dibawah password, nanti anda akan diarahkan menuju halaman lupa password atau akses link berikut https://tripp.vercel.app/forgotpassword',
      en: 'the forgot password button is in the login modal under the password, later you will be directed to the forgot password page or access the following link https://tripp.vercel.app/forgotpassword',
    },
  },
]
