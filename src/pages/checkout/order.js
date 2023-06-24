import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Button from '@/component/Button'
import { useRouter } from 'next/router'

import { CheckoutLayout } from '@/component/Layout'
import { selectAuth } from '@/redux/reducers/auth'
import { seatesFlight } from '@/utils/local'
import { useSelector } from 'react-redux'
import { changeToRupiah, convertDateTicket } from '@/utils'
import TextfieldPhone from '@/component/Form/TextfieldPhone'
import SelectSeat from '@/component/Select/SelectSeat'
import Textfield from '@/component/Form/Textfield'

import Ic_plane from 'public/icon/plane2.svg'
import api from '@/services/api'
import Cookies from 'js-cookie'

export default function Order() {
  const router = useRouter()
  const { user } = useSelector(selectAuth)
  const [query, setQuery] = useState(null)
  const [form, setForm] = useState(null)
  const [seates, setSeates] = useState(seatesFlight)
  const [lengthSeat, setLengthSeat] = useState(0)
  const [seatesRemaining, setSeatesRemaining] = useState(0)
  const [flight, setFlight] = useState(null)

  useEffect(() => {
    if (router.isReady) {
      setQuery(router.query)
    }
  }, [router.isReady])

  useEffect(() => {
    if (query === null) return

    getFlightDetail(query.id)

    const adultForm = []
    const kidForm = []
    const babyForm = []

    addToForm(adultForm, 'a', query)
    addToForm(kidForm, 'k', query)
    addToForm(babyForm, 'b', query)

    addToSeates(['a', 'k', 'b'])

    return () => setForm(null)
  }, [query])

  async function getFlightDetail(id) {
    try {
      const { data } = await api(`/flights/${id}`)
      if (data.status) {
        setFlight(data.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  function addToSeates(param) {
    let length = 0
    param.forEach((p) => {
      if ([p] in query) {
        let tmp = parseInt(query[p], 10)
        length += tmp
      }
    })
    setLengthSeat(length)
  }

  function addToForm(form, type, query) {
    if (type in query) {
      if (!parseInt(query[type])) return

      for (let a = 0; a < parseInt(query[type]); a++) {
        const newState = {
          name: '',
          date_of_birth: '',
          nationality: '',
          ktp: '',
          passport: '',
          issuing_country: '',
          expiration_date: '',
          passenger_type: PassengerTypes[type],
        }
        form.push(newState)
      }
      setForm((prev) => ({ ...prev, [type]: [...form] }))
    }
  }

  function reduceDataToObject(data) {
    return Object.values(data).reduce((result, arr) => {
      return result.concat(arr)
    }, [])
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const jwt = Cookies.get('jwt')
      const tmp_passengers = reduceDataToObject(form)
      const passengers = tmp_passengers.map((passenger) => {
        if (passenger.passport === '') {
          return { ...passenger, passport: null, issuing_country: null }
        }
        return passenger
      })
      const body = {
        user_id: user.id,
        flight_id: flight.id,
        passengers,
      }
      const { data } = await api.post('/transactions', body, {
        headers: {
          Authorization: jwt,
        },
      })

      if (data.status) {
        router.push(`/checkout/payment?id=${flight.id}`)
      }
    } catch (err) {
      console.log(err)
    }
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

  const sumPassenger = useMemo(() => {
    let tmp = 0
    tmp += parseInt(query?.a)
    tmp += parseInt(query?.k)
    tmp += parseInt(query?.b)
    return tmp
  }, [query])

  return (
    <div className='pt-8'>
      <div className='px-4 lg:px-0'>
        <p className='text-xl text-gray-800'>Detail Pemesanan</p>
      </div>

      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-4 justify-between items-start px-4 lg:px-0'>
        <form onSubmit={handleSubmit}>
          <div className='bg-white rounded border border-[#DFDEE2] pt-6 p-8 pb-10'>
            <p>Data Diri Pemesan</p>
            <label className='text-sm mt-4 mb-2 block'>Nama</label>
            <Textfield value={user?.name} disabled />

            <label className='text-sm mt-4 mb-2 block'>Nomor Telepon</label>
            <TextfieldPhone value={user?.phone_number} disabled />

            <label className='text-sm mt-4 mb-2 block'>Email</label>
            <Textfield value={user?.email} disabled />
          </div>

          <div className='mt-8'>
            <p className='text-lg mb-4'>Detail Penumpang</p>

            <div className='mb-10'>
              {form?.a.length > 0
                ? form.a.map((field, index) => (
                    <div
                      key={index}
                      className='mt-8 bg-white rounded border border-[#DFDEE2] pt-6 pb-8 px-8'
                    >
                      <p className='mb-4'>Penumpang dewasa {index + 1}</p>
                      <div className='flex flex-col gap-4'>
                        <Textfield
                          value={field.name}
                          name='name'
                          withLabel
                          label='Nama lengkap'
                          onChange={(e) => handleChange(e, 'a', index)}
                        />

                        <Textfield
                          value={field.date_of_birth}
                          name='date_of_birth'
                          withLabel
                          label='Tanggal lahir'
                          type='date'
                          onChange={(e) => handleChange(e, 'a', index)}
                        />

                        <Textfield
                          value={field.nationality}
                          name='nationality'
                          withLabel
                          label='Kewarganegaraan'
                          onChange={(e) => handleChange(e, 'a', index)}
                        />

                        <Textfield
                          value={field.ktp}
                          name='ktp'
                          withLabel
                          label='KTP'
                          onChange={(e) => handleChange(e, 'a', index)}
                        />

                        <Textfield
                          value={field.passport}
                          name='passport'
                          withLabel
                          label='Passport'
                          onChange={(e) => handleChange(e, 'a', index)}
                        />

                        <Textfield
                          value={field.issuing_country}
                          name='issuing_country'
                          withLabel
                          label='negara penerbit'
                          onChange={(e) => handleChange(e, 'a', index)}
                        />

                        <Textfield
                          value={field.expiration_date}
                          name='expiration_date'
                          withLabel
                          label='Berlaku sampai'
                          type='date'
                          onChange={(e) => handleChange(e, 'a', index)}
                        />
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <div className='mb-10'>
              {form?.k?.length > 0
                ? form.k.map((field, index) => (
                    <div
                      key={index}
                      className='mt-8 bg-white rounded border border-[#DFDEE2] pt-6 pb-8 px-8'
                    >
                      <p className='mb-4'>Penumpang Anak {index + 1}</p>
                      <div className='flex flex-col gap-4'>
                        <Textfield
                          value={field.name}
                          name='name'
                          withLabel
                          label='Nama lengkap'
                          onChange={(e) => handleChange(e, 'k', index)}
                        />

                        <Textfield
                          value={field.date_of_birth}
                          name='date_of_birth'
                          withLabel
                          label='Tanggal lahir'
                          type='date'
                          onChange={(e) => handleChange(e, 'k', index)}
                        />

                        <Textfield
                          value={field.nationality}
                          name='nationality'
                          withLabel
                          label='Kewarganegaraan'
                          onChange={(e) => handleChange(e, 'k', index)}
                        />

                        <Textfield
                          value={field.ktp}
                          name='ktp'
                          withLabel
                          label='KTP'
                          onChange={(e) => handleChange(e, 'k', index)}
                        />

                        <Textfield
                          value={field.passport}
                          name='passport'
                          withLabel
                          label='Passport'
                          onChange={(e) => handleChange(e, 'k', index)}
                        />

                        <Textfield
                          value={field.issuing_country}
                          name='issuing_country'
                          withLabel
                          label='negara penerbit'
                          onChange={(e) => handleChange(e, 'k', index)}
                        />

                        <Textfield
                          value={field.expiration_date}
                          name='expiration_date'
                          withLabel
                          label='Berlaku sampai'
                          type='date'
                          onChange={(e) => handleChange(e, 'k', index)}
                        />
                      </div>
                    </div>
                  ))
                : null}
            </div>

            <div>
              {form?.b?.length > 0
                ? form.b.map((field, index) => (
                    <div
                      key={index}
                      className='mt-8 bg-white rounded border border-[#DFDEE2] pt-6 pb-8 px-8'
                    >
                      <p className='mb-4'>Penumpang Bayi {index + 1}</p>
                      <div className='flex flex-col gap-4'>
                        <Textfield
                          value={field.name}
                          name='name'
                          withLabel
                          label='Nama lengkap'
                          onChange={(e) => handleChange(e, 'b', index)}
                        />

                        <Textfield
                          value={field.date_of_birth}
                          name='date_of_birth'
                          withLabel
                          label='Tanggal lahir'
                          type='date'
                          onChange={(e) => handleChange(e, 'b', index)}
                        />

                        <Textfield
                          value={field.nationality}
                          name='nationality'
                          withLabel
                          label='Kewarganegaraan'
                          onChange={(e) => handleChange(e, 'b', index)}
                        />

                        <Textfield
                          value={field.ktp}
                          name='ktp'
                          withLabel
                          label='KTP'
                          onChange={(e) => handleChange(e, 'b', index)}
                        />

                        <Textfield
                          value={field.passport}
                          name='passport'
                          withLabel
                          label='Passport'
                          onChange={(e) => handleChange(e, 'b', index)}
                        />

                        <Textfield
                          value={field.issuing_country}
                          name='issuing_country'
                          withLabel
                          label='negara penerbit'
                          onChange={(e) => handleChange(e, 'b', index)}
                        />

                        <Textfield
                          value={field.expiration_date}
                          name='expiration_date'
                          withLabel
                          label='Berlaku sampai'
                          type='date'
                          onChange={(e) => handleChange(e, 'b', index)}
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
          <div className='bg-white rounded pb-4 overflow-hidden'>
            <div className='h-9 w-full bg-teal-700 px-4 flex items-center justify-start text-sm text-white relative'>
              <p>{flight?.flight_number}</p>
            </div>
            <div className='relative pb-6 w-full px-4'>
              <div className='flex items-center justify-center gap-4 pt-2 pb-3 border-b border-gray-300'>
                <p className='text-left text-base text-slate-700'>
                  {flight?.departure.city}{' '}
                  <span className='text-sm font-semibold text-slate-800'>
                    ({flight?.departure.iata_code})
                  </span>
                </p>
                <Image
                  src={Ic_plane}
                  width={22}
                  height={22}
                  alt={`plane destination to ${flight?.arrival.city}`}
                />
                <p className='text-right text-base text-slate-700'>
                  {flight?.arrival.city}{' '}
                  <span className='text-sm font-semibold text-slate-800'>
                    ({flight?.arrival.iata_code})
                  </span>
                </p>
              </div>
              <div className='mt-3'>
                <div className='flex justify-between items-start flex-wrap'>
                  <div className='flex gap-3'>
                    <img
                      className='w-10 object-contain'
                      src={flight?.airline.icon_url}
                    />
                    <p className='text-slate-900'>{flight?.airline.name}</p>
                  </div>
                  <div className='text-right'>
                    <p className='text-xs text-gray-400'>pesawat</p>
                    <p className='text-sm text-gray-700'>
                      {flight?.airplane.model}
                    </p>
                  </div>
                </div>

                <div>
                  <p className='text-xs text-slate-400'>Berangkat </p>
                  <p className='text-sm text-slate-800'>
                    {convertDateTicket('id-ID', flight?.flight_date)}
                  </p>
                </div>
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
                  <p className='text-right'>
                    {changeToRupiah(flight?.price)}
                    <span className='text-gray-500'>x{query?.a}</span>
                  </p>
                </div>

                {form?.k?.length > 0 ? (
                  <>
                    <div className='mt-2 flex items-center justify-between text-xs'>
                      <p className='text-slate-400'>Anak-anak</p>
                      <p className='text-right'>
                        {changeToRupiah(flight?.price)}
                        <span className='text-gray-500'>x{query?.k}</span>
                      </p>
                    </div>
                  </>
                ) : null}

                {form?.b?.length > 0 ? (
                  <>
                    <div className='mt-2 flex items-center justify-between text-xs'>
                      <p className='text-slate-400'>Bayi</p>
                      <p className='text-right'>
                        {changeToRupiah(flight?.price)}
                        <span className='text-gray-500'>x{query?.b}</span>
                      </p>
                    </div>
                  </>
                ) : null}
              </div>

              <div className='flex justify-between items-center border-t border-gray-200 pt-1'>
                <p className='text-sm text-slate-400'>Total</p>
                <p className='font-medium text-slate-800'>
                  {changeToRupiah(sumPassenger * flight?.price)}
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

Order.auth = { hasLoggedIn: true }

const PassengerTypes = {
  a: 'dewasa',
  k: 'anak',
  b: 'bayi',
}
