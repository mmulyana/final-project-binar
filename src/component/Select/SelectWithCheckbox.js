import React from 'react'

export default function SelectWithCheckbox({ name, isChecked }) {
  return (
    <div className='flex items-center justify-between'>
      {name}
      <div>{isChecked ? 'checked' : 'unchecked'}</div>
    </div>
  )
}
