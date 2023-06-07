import { Field } from 'formik'
import React from 'react'

export default function Textfield({ label, id, name }) {
  return (
    <div className='relative'>
      <label htmlFor={id}>{label}</label>
      <Field className='' name={name} id={id} />
    </div>
  )
}
