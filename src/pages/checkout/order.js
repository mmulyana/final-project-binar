import Textfield from '@/component/Form/Textfield'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import { CheckoutLayout } from '@/component/Layout'
import { FieldArray, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

let initialValues = {}

function Order() {
  const router = useRouter()
  const [query, setQuery] = useState(null)
  const [form, setForm] = useState(null)

  useEffect(() => {
    if (!router.query) return

    setQuery(router.query)

    return () => setQuery(null)
  }, [router])

  useEffect(() => {
    if (query == null) return
    if (router.query == null) return

    let adultForm = []
    let kidForm = []
    let babyForm = []

    if (query.hasOwnProperty('adult')) {
      for (let a = 0; a < parseInt(query.adult, 10); a++) {
        const newAdultState = {
          name: '',
          email: '',
        }
        adultForm.push(newAdultState)
      }
      setForm((prev) => ({ ...prev, adult: [...adultForm] }))
    }
    

    if ('kid' in query) {
      for (let a = 0; a < parseInt(query.kid, 10); a++) {
        const newKidState = {
          name: '',
          email: '',
        }
        kidForm.push(newKidState)
      }
      setForm((prev) => ({ ...prev, kid: [...kidForm] }))
    }

    if ('baby' in query) {
      for (let a = 0; a < parseInt(query.kid, 10); a++) {
        const newBabyState = {
          name: '',
          email: '',
        }
        babyForm.push(newBabyState)
      }
      setForm((prev) => ({ ...prev, baby: [...babyForm] }))
    }
    return () => setForm(null)
  }, [query, router.query])

  function handleSubmit(values) {
    console.log(values)
  }

  if(form === null) {
    return <></>
  }

  console.log(form)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[720px_440px] justify-between items-start mt-4 px-4 lg:px-0'>
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

          {form?.adult.length > 0
            ? form.adult.map((field, index) => (
                <div
                  key={index}
                  className='mt-2 bg-white rounded border border-[#DFDEE2] p-4'
                >
                  <p>Penumpang dewasa {index + 1}</p>
                  <label className='text-sm mt-4 mb-2 block'>Nama</label>
                  <Textfield value={field.name} />

                  <label className='text-sm mt-4 mb-2 block'>Email</label>
                  <Textfield />
                </div>
              ))
            : null}
          {form?.kid?.length > 0
            ? form.kid.map((field, index) => (
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
              ))
            : null}

          
          {form?.baby?.length > 0
            ? form.baby.map((field, index) => (
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
              ))
            : null}
        </div>
        <button type='submit'>Simpan</button>
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
