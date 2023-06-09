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
        'rounded h-fit grid grid-cols-2 relative gap-2',
        classNameBg !== '' ? classNameBg : null,
      ].join(' ')}
    >
      <div
        className={[
          'py-2 md:py-3 px-3 md:px-5 text-sm relative cursor-pointer border-b-[4px]',
          isOn ? 'bg-white border-blue-600' : 'text-slate-500 border-transparent',
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
          'py-2 md:py-3 px-3 md:px-5 text-sm relative cursor-pointer border-b-[4px]',
          !isOn ? 'bg-white border-blue-600' : 'text-slate-500 border-transparent',
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
