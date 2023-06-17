import Textfield from '@/component/Form/Textfield'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import { CheckoutLayout } from '@/component/Layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

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
    if (query == null || router.query == null) return

    const adultForm = []
    const kidForm = []
    const babyForm = []

    addToForm(adultForm, 'adult', query)
    addToForm(kidForm, 'kid', query)
    addToForm(babyForm, 'baby', query)

    return () => setForm(null)
  }, [query, router.query])

  function addToForm(form, type, query) {
    if (type in query) {
      for (let a = 0; a < parseInt(query[type], 10); a++) {
        const newState = {
          title: '',
          name: '',
          familyName: '',
          birthDate: '',
          citizenship: '',
          identityCard: '',
          issuingCountry: '',
          hasFamilyName: true,
        }
        form.push(newState)
      }
      setForm((prev) => ({ ...prev, [type]: [...form] }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(JSON.stringify(form))
  }

  function handleChange(e, type, index) {
    const { value, name } = e.target
    setForm((prev) => {
      const updatedState = { ...prev }
      updatedState[type][index][name] = value
      return updatedState
    })
  }

  if (form === null) {
    return <p>loading...</p>
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[720px_440px] justify-between items-start mt-4 px-4 lg:px-0'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
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
            <p className='text-lg mb-4'>Detail Penumpang</p>

            <div className='mb-10'>
              {form?.adult.length > 0
                ? form.adult.map((field, index) => (
                    <div
                      key={index}
                      className='mt-8 bg-white rounded border border-[#DFDEE2] pt-6 pb-8 px-8'
                    >
                      <p className='mb-4'>Penumpang dewasa {index + 1}</p>
                      <div className='flex flex-col gap-4'>
                        <Textfield
                          value={field.title}
                          name='title'
                          withLabel
                          label='sapaan'
                          placeholder='tuan'
                          onChange={(e) => handleChange(e, 'adult', index)}
                        />

                        <Textfield
                          value={field.name}
                          name='name'
                          withLabel
                          label='Nama lengkap'
                          onChange={(e) => handleChange(e, 'adult', index)}
                        />
                        {!!field.familyName && (
                          <Textfield
                            value={field.familyName}
                            name='familyName'
                            withLabel
                            label='Nama Keluarga'
                            placeholder='nama keluarga'
                            onChange={(e) => handleChange(e, 'adult', index)}
                          />
                        )}

                        <Textfield
                          value={field.birthDate}
                          name='birthDate'
                          withLabel
                          label='Tanggal lahir'
                          type='date'
                          onChange={(e) => handleChange(e, 'adult', index)}
                        />

                        <Textfield
                          value={field.citizenship}
                          name='citizenship'
                          withLabel
                          label='Kewarganegaraan'
                          onChange={(e) => handleChange(e, 'adult', index)}
                        />
                        <Textfield
                          value={field.identityCard}
                          name='identityCard'
                          withLabel
                          label='KTP/Paspor'
                          onChange={(e) => handleChange(e, 'adult', index)}
                        />
                        <Textfield
                          value={field.issuingCountry}
                          name='issuingCountry'
                          withLabel
                          label='negara penerbit'
                          onChange={(e) => handleChange(e, 'adult', index)}
                        />
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <div className='mb-10'>
              {form?.kid?.length > 0
                ? form.kid.map((field, index) => (
                    <div
                      key={index}
                      className='mt-8 bg-white rounded border border-[#DFDEE2] pt-6 pb-8 px-8'
                    >
                      <p className='mb-4'>Penumpang Anak {index + 1}</p>
                      <div className='flex flex-col gap-4'>
                        <Textfield
                          value={field.title}
                          name='title'
                          withLabel
                          label='sapaan'
                          placeholder='tuan'
                          onChange={(e) => handleChange(e, 'kid', index)}
                        />

                        <Textfield
                          value={field.name}
                          name='name'
                          withLabel
                          label='Nama lengkap'
                          onChange={(e) => handleChange(e, 'kid', index)}
                        />
                        {!!field.familyName && (
                          <Textfield
                            value={field.familyName}
                            name='familyName'
                            withLabel
                            label='Nama Keluarga'
                            placeholder='nama keluarga'
                            onChange={(e) => handleChange(e, 'kid', index)}
                          />
                        )}

                        <Textfield
                          value={field.birthDate}
                          name='birthDate'
                          withLabel
                          label='Tanggal lahir'
                          type='date'
                          onChange={(e) => handleChange(e, 'kid', index)}
                        />

                        <Textfield
                          value={field.citizenship}
                          name='citizenship'
                          withLabel
                          label='Kewarganegaraan'
                          onChange={(e) => handleChange(e, 'kid', index)}
                        />
                        <Textfield
                          value={field.identityCard}
                          name='identityCard'
                          withLabel
                          label='KTP/Paspor'
                          onChange={(e) => handleChange(e, 'kid', index)}
                        />
                        <Textfield
                          value={field.issuingCountry}
                          name='issuingCountry'
                          withLabel
                          label='negara penerbit'
                          onChange={(e) => handleChange(e, 'kid', index)}
                        />
                      </div>
                    </div>
                  ))
                : null}
            </div>

            <div>
              {form?.baby?.length > 0
                ? form.baby.map((field, index) => (
                    <div
                      key={index}
                      className='mt-8 bg-white rounded border border-[#DFDEE2] pt-6 pb-8 px-8'
                    >
                      <p className='mb-4'>Penumpang Bayi {index + 1}</p>
                      <div className='flex flex-col gap-4'>
                        <Textfield
                          value={field.title}
                          name='title'
                          withLabel
                          label='sapaan'
                          placeholder='tuan'
                          onChange={(e) => handleChange(e, 'baby', index)}
                        />

                        <Textfield
                          value={field.name}
                          name='name'
                          withLabel
                          label='Nama lengkap'
                          onChange={(e) => handleChange(e, 'baby', index)}
                        />
                        {!!field.familyName && (
                          <Textfield
                            value={field.familyName}
                            name='familyName'
                            withLabel
                            label='Nama Keluarga'
                            placeholder='nama keluarga'
                            onChange={(e) => handleChange(e, 'baby', index)}
                          />
                        )}

                        <Textfield
                          value={field.birthDate}
                          name='birthDate'
                          withLabel
                          label='Tanggal lahir'
                          type='date'
                          onChange={(e) => handleChange(e, 'baby', index)}
                        />

                        <Textfield
                          value={field.citizenship}
                          name='citizenship'
                          withLabel
                          label='Kewarganegaraan'
                          onChange={(e) => handleChange(e, 'baby', index)}
                        />
                        <Textfield
                          value={field.identityCard}
                          name='identityCard'
                          withLabel
                          label='KTP/Paspor'
                          onChange={(e) => handleChange(e, 'baby', index)}
                        />
                        <Textfield
                          value={field.issuingCountry}
                          name='issuingCountry'
                          withLabel
                          label='negara penerbit'
                          onChange={(e) => handleChange(e, 'baby', index)}
                        />
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <button
            type='submit'
            className='flex items-center justify-center bg-[#4642FF] text-white text-sm rounded font-medium py-4'
          >
            Simpan
          </button>
        </div>
      </form>
      <div className='bg-white rounded border border-[#DFDEE2] relative p-4'>
        <p>{query?.departure}</p>
        <p>{query?.destination}</p>
      </div>
    </div>
  )
}

Order.getLayout = (page) => {
  return <CheckoutLayout index={1}>{page}</CheckoutLayout>
}

export default Order
