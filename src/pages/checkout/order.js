import Textfield from '@/component/Form/Textfield'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import { CheckoutLayout } from '@/component/Layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Order() {
  const router = useRouter()
  const [query, setQuery] = useState(null)

  useEffect(() => {
    setQuery(router.query)

    return () => setQuery(null)
  }, [router])

  console.log(query)
  console.log(router)

  if (query === null || Object.keys(query).length === 0) {
    return <></>
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[720px_440px] justify-between mt-4'>
      <div>
        <div>
          <p className='text-lg'>Detail Pemesanan</p>
          <div className='bg-white rounded border border-[#DFDEE2] mt-2 p-4 pb-8'>
            <p>Data Diri Pemesan</p>
            <label className='text-sm mt-4 mb-2 block'>Nama</label>
            <Textfield value='Rengoku kyojuro' disabled />

            <label className='text-sm mt-4 mb-2 block'>Nomor Telepon</label>
            <TextfieldPhone value='0872355677' disabled />

            <label className='text-sm mt-4 mb-2 block'>Email</label>
            <Textfield value='example@mail.com' disabled />
          </div>
        </div>

        <div className='mt-8'>
          <p className='text-lg'>Detail Penumpang</p>
          {Array(Number(query.adult))
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className='mt-2 bg-white rounded border border-[#DFDEE2] p-4'
              >
                <p>Penumpang dewasa {index + 1}</p>
                <label className='text-sm mt-4 mb-2 block'>Nama</label>
                <Textfield />

                <label className='text-sm mt-4 mb-2 block'>Email</label>
                <Textfield />
              </div>
            ))}
          {'kid' in query ? Array(Number(query.kid))
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className='mt-2 bg-white rounded border border-[#DFDEE2] p-4'
              >
                <p>Penumpang Anak {index + 1}</p>
                <label className='text-sm mt-4 mb-2 block'>Nama</label>
                <Textfield />

                <label className='text-sm mt-4 mb-2 block'>Email</label>
                <Textfield />
              </div>
            )) : null}
          {'baby' in query ? Array(Number(query.baby))
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className='mt-2 bg-white rounded border border-[#DFDEE2] p-4'
              >
                <p>Penumpang Bayi {index + 1}</p>
                <label className='text-sm mt-4 mb-2 block'>Nama</label>
                <Textfield />

                <label className='text-sm mt-4 mb-2 block'>Email</label>
                <Textfield />
              </div>
            )) : null}
        </div>
      </div>
      <div className='bg-white rounded border border-[#DFDEE2] relative p-4'>
        <p>hello</p>
      </div>
    </div>
  )
}

Order.getLayout = (page) => {
  return <CheckoutLayout index={1}>{page}</CheckoutLayout>
}

export default Order
