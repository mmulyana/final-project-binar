import React from 'react'

export default function SelectFilter({data}) {
  return (
    <div>
        <p>{data.name}</p>
        <p>{data.price}</p>
    </div>
  )
}
