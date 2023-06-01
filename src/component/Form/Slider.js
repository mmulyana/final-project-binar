import React from 'react'

export default function Slider({ isChecked = false, handleClick, className }) {
  return (
    <div
      className={[
        'w-10 h-6 rounded-full cursor-pointer',
        isChecked ? 'bg-primary-purple-5' : 'bg-neutral-3',
        className,
      ].join(' ')}
      onClick={handleClick}
    >
      <div
        className={[
          'absolute h-5 w-5 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.2)] top-1/2 -translate-y-1/2',
          isChecked ? 'right-[2px]' : 'left-[2px]',
        ].join(' ')}
      />
    </div>
  )
}
