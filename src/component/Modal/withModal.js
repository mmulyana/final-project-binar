import { useEffect } from 'react'
import Portal from '../Portal'

export default function withModal(WrappedComponent) {
  function Modal({ isOpen, toggleModal, className, ...props }) {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        toggleModal()
      }
    }

    useEffect(() => {
      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown)
      } else {
        document.removeEventListener('keydown', handleKeyDown)
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [isOpen, toggleModal, handleKeyDown])

    if (isOpen) {
      return (
        <div className='absolute top-0 left-0 w-full h-full'>
          <WrappedComponent toggleModal={toggleModal} {...props} className={className} />
          <div
            onClick={toggleModal}
            className='fixed top-0 left-0 bg-black/50 h-screen w-full'
          />
        </div>
      )
    }
  }
  return Portal(Modal)
}
