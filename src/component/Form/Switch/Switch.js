import React, { useState } from 'react'

export default function Switch({
  dispatch,
  classNameBg,
  leftText,
  rightText,
  value,
}) {
  const [isOn, setIsOn] = useState(value)

  function handleClick(value) {
    dispatch({
      type: 'onchange',
      payload: {
        type: 'isOneWay',
        value,
      },
    })
  }
  return (
    <div
      className={[
        'bg-[#E9E9E9] rounded h-fit flex items-center relative p-1',
        classNameBg !== '' ? classNameBg : null,
      ].join(' ')}
    >
      <div
        className={[
          'py-3 px-5 text-sm relative rounded z-10 cursor-pointer',
          isOn ? 'bg-white shadow-md' : '',
        ].join(' ')}
        onClick={() => {
          handleClick(true)
          setIsOn(true)
        }}
      >
        {leftText}
      </div>
      <div
        className={[
          'py-3 px-5 text-sm relative rounded z-10 cursor-pointer',
          !isOn ? 'bg-white shadow-md' : '',
        ].join(' ')}
        onClick={() => {
          handleClick(false)
          setIsOn(false)
        }}
      >
        {rightText}
      </div>
    </div>
  )
}
