import React from 'react'

export default function LayerModal({ isOpen, handleToggle }) {
  if (isOpen) {
    return <div onClick={handleToggle} className='fixed top-0 left-0 h-screen w-screen bg-black/80 z-10' />
  }
}
