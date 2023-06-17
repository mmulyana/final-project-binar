import Textfield from '@/component/Form/Textfield'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import { CheckoutLayout } from '@/component/Layout'
import SelectSeat from '@/component/Select/SelectSeat'
import { seatesFlight } from '@/utils/local'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Ic_plane from 'public/icon/plane2.svg'
import Button from '@/component/Button'
import { changeToRupiah } from '@/utils'

function Order() {
  const router = useRouter()
  const [query, setQuery] = useState(null)
  const [form, setForm] = useState(null)
  const [seates, setSeates] = useState(seatesFlight)
  const [lengthSeat, setLengthSeat] = useState(0)
  const [seatesRemaining, setSeatesRemaining] = useState(0)

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

    addToSeates(['adult', 'kid', 'baby'])

    return () => setForm(null)
  }, [query, router.query])

  function addToSeates(param) {
    let length = 0
    param.forEach((p, index) => {
      if ([p] in query) {
        let tmp = parseInt(query[p], 10)
        length += tmp
      }
    })
    setLengthSeat(length)
  }

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
    localStorage.setItem('order', JSON.stringify(form))
    router.push('/checkout/payment')
  }

  function handleChange(e, type, index) {
    const { value, name } = e.target
    setForm((prev) => {
      const updatedState = { ...prev }
      updatedState[type][index][name] = value
      return updatedState
    })
  }

  function handleSelect(data, col, index) {
    if (seatesRemaining >= lengthSeat) {
      if (!col.isSelected) return
    }

    const newStates = seates.map((prev) => {
      if (prev.row === data.row) {
        prev.col[index] = {
          ...prev.col[index],
          isSelected: !prev.col[index].isSelected,
        }
        if (col.isSelected) {
          setSeatesRemaining((prev) => prev - 1)
        } else setSeatesRemaining((prev) => prev + 1)
        return prev
      }
      return prev
    })

    setSeates(newStates)
  }

  if (form === null) {
    return <p>loading...</p>
  }

  return (
    <div className='pt-8'>
      <div className='px-4 lg:px-0'>
        <p className='text-xl text-gray-800'>Detail Pemesanan</p>
      </div>

      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-4 justify-between items-start px-4 lg:px-0'>
        <form onSubmit={handleSubmit}>
          <div className='bg-white rounded border border-[#DFDEE2] pt-6 p-8 pb-10 shadow-sm shadow-gray-300'>
            <p>Data Diri Pemesan</p>
            <label className='text-sm mt-4 mb-2 block'>Nama</label>
            <Textfield value='Rengoku kyojuro' disabled />

            <label className='text-sm mt-4 mb-2 block'>Nomor Telepon</label>
            <TextfieldPhone value='0872355677' disabled />

            <label className='text-sm mt-4 mb-2 block'>Email</label>
            <Textfield value='example@mail.com' disabled />
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

          <div className='mt-4 bg-white rounded border border-[#DFDEE2] p-4'>
            <p className='mb-6 text-center'>Pilih kursi</p>
            <SelectSeat data={seates} handleSelect={handleSelect} />
          </div>

          <Button
            type='submit'
            className='mt-8 flex items-center justify-center bg-[#4642FF] text-white text-sm rounded font-medium py-4 w-52 ml-auto'
          >
            Lanjutkan
          </Button>
        </form>
        <div>
          <div className='bg-white rounded py-4'>
            <div className='relative pb-6 w-full px-4'>
              <div className='flex items-center gap-2'>
                <Image
                  src={Ic_plane}
                  alt={`plane destination to ${query?.destination}`}
                />
                <p>
                  {query?.departure} → {query?.destination}
                </p>
              </div>

              <div className='mt-2 flex items-center gap-2'>
                <p className='text-sm text-slate-400'>Berangkat </p>
                <div className='w-1 h-1 rounded-full bg-gray-300' />
                <p className='text-sm text-slate-800'>3 Juni 2023</p>
              </div>
              <div className='mt-2 flex items-center gap-2'>
                <p className='text-sm text-slate-800'>Soekarno Hatta </p>
              </div>

              <div className='w-5 h-5 bg-[#F0F1F6] rounded-full absolute -left-[10px] bottom-0' />
              <div className='w-5 h-5 bg-[#F0F1F6] rounded-full absolute -right-[10px] bottom-0' />
              <div className='w-[90%] border border-dashed border-gray-200 absolute bottom-[10px] left-1/2 -translate-x-1/2' />
            </div>
            <div className='px-4 pt-4'>
              <div className='pb-4'>
                <p className='text-sm text-slate-800'>Rincian harga</p>
                <div className='mt-2 flex items-center justify-between text-xs'>
                  <p className='text-slate-400'>Dewasa</p>
                  <p>
                    {changeToRupiah(300000).slice(0, -3)}{' '}
                    <span className='text-gray-300'>x{query?.adult}</span>
                  </p>
                </div>

                {'kid' in query ? (
                  <>
                    <div className='mt-2 flex items-center justify-between text-xs'>
                      <p className='text-slate-400'>Anak-anak</p>
                      <p>
                        {changeToRupiah(200000).slice(0, -3)}{' '}
                        <span className='text-gray-300'>x{query?.kid}</span>
                      </p>
                    </div>
                  </>
                ) : null}

                {'baby' in query ? (
                  <>
                    <div className='mt-2 flex items-center justify-between text-xs'>
                      <p className='text-slate-400'>Bayi</p>
                      <p>
                        {changeToRupiah(100000).slice(0, -3)}{' '}
                        <span className='text-gray-300'>x{query?.baby}</span>
                      </p>
                    </div>
                  </>
                ) : null}
              </div>

              <div className='flex justify-between items-center border-t border-gray-200 pt-1'>
                <p className='text-sm text-slate-400'>Total</p>
                <p className='font-medium text-slate-800'>
                  {changeToRupiah(900000).slice(0, -3)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Order.getLayout = (page) => {
  return <CheckoutLayout index={1}>{page}</CheckoutLayout>
}

export default Order
