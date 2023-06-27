import { useEffect } from 'react'
import Portal from '../Portal'

export default function withModal(WrappedComponent) {
  function Modal({ isOpen, toggleModal, zIndex, ...props }) {
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          toggleModal()
        }
      }
      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown)
      } else {
        document.removeEventListener('keydown', handleKeyDown)
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [isOpen, toggleModal])

    if (isOpen) {
      return (
        <div
          className='absolute top-0 left-0 w-full h-full'
          style={{ zIndex: zIndex ? zIndex : '' }}
        >
          <WrappedComponent toggleModal={toggleModal} {...props} />
          <div
            onClick={toggleModal}
            className='fixed top-0 left-0 bg-black/60 h-screen w-full'
          />
        </div>
      )
    }
  }
  return Portal(Modal)
}
