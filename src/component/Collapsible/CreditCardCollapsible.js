import React, { useState } from 'react'
import withCollapsible from './withCollapsible'
import TextfieldCredit from '../Form/TextfieldCredit'
import Textfield from '../Form/Textfield'

import Ic_Ae from '/public/icon/ae-card.png'
import Ic_Ma from '/public/icon/mastercard-card.png'
import Ic_Vs from '/public/icon/visa-card.webp'
import Ic_Cr from '/public/icon/credit-card.svg'

const initCard = { cardNumber: '', cardHolderName: '', cvv: '', expiry: '' }

function CreditCard({ handleSubmit }) {
  const [card, setCard] = useState(initCard)
  const [img, setImg] = useState(Ic_Cr)

  function handleChange(e) {
    const { value, name } = e.target
    if (name === 'cardNumber') {
      handleNumberCard(value)
    }
    setCard((prev) => ({ ...prev, [name]: value }))
  }

  function handleNumberCard(value) {
    if (value[0] === '2' || value[0] === '5') {
      setImg(Ic_Ma)
      return
    }

    if (value[0] === '4') {
      setImg(Ic_Vs)
      return
    }

    if (value[0] === '3') {
      setImg(Ic_Ae)
      return
    }

    setImg(Ic_Cr)
  }

  return (
    <div className='mt-[2px] bg-white p-4 pb-6 rounded border flex flex-col gap-6'>
      <TextfieldCredit
        onChange={handleChange}
        value={card.cardNumber}
        name='cardNumber'
        img={img}
        type='number'
      />
      
      <Textfield
        withLabel
        label='Nama pemegang kartu'
        onChange={handleChange}
        value={card.cardHolderName}
        name='cardHolderName'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Textfield
          withLabel
          label='expiry'
          type='date'
          name='expiry'
          value={card.expiry}
          onChange={handleChange}
        />
        <Textfield
          withLabel
          label='CVV'
          type='number'
          name='cvv'
          value={card.cvv}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

const CreditCardCollapsible = withCollapsible(CreditCard)
export default CreditCardCollapsible
