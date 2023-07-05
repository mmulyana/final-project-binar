import FaqCollapsible from '@/component/Collapsible/FaqCollapsible'
import { SecondaryLayout } from '@/component/Layout'
import React, { useState } from 'react'

export default function Help() {
  const [search, setSearch] = useState('')
  return (
    <div className='pt-20'>
      <section className='w-full py-12 mt-4 max-w-[1000px] px-4 mx-auto rounded-lg text-center'>
        <p className='text-blue-700 text-xs font-semibold'>FAQ</p>
        <h1 className='text-2xl mt-2 text-slate-800'>Pusat bantuan</h1>
        <p className='text-sm mt-1 text-slate-500'>
          Temukan jawaban untuk permasalahan anda
        </p>
      </section>
      <section className='max-w-[900px] mx-auto px-4 grid grid-cols-1 md:grid-cols-[1fr_2fr]'>
        <p className='text-lg text-slate-800'>Paling sering ditanyakan</p>
        <div className='flex flex-col gap-2 mt-2 md:mt-0'>
          {Faqs.map((faq, index) => (
            <FaqCollapsible
              key={index}
              className='px-4 rounded text-slate-800 text-sm border border-gray-200 cursor-pointer'
              name={faq.name}
              message={faq.message}
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
    name: 'Bagaimana cara melakukan pengecekan pesanan?',
    message:
      'Silahkan akses pengaturan melalui menu di navbar harus login dahulu, dan temukan opsi transaksi di menu samping.',
  },
  {
    name: 'Bagaimana cara melakukan pengecekan pesanan tanpa login dahulu?',
    message:
      'Silahkan buka halaman cek pesanan lalu masukan no. pesanan dan tekan tombol cek, jika pesanan ada akan muncul tiket disebalah kanan',
  },
  {
    name: 'Bagaimana jika lupa password?',
    message:
      'tombol lupa password ada di modal masuk dibawah password, nanti anda akan diarahkan menuju halaman lupa password atau akses link berikut https://tripp.vercel.app/forgotpassword',
  },
]
