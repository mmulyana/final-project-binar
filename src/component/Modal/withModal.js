import { useEffect } from 'react'

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
        <div
          className={`z-50 absolute ${className}`}
        >
          <WrappedComponent toggleModal={toggleModal} {...props} />
        </div>
      )
    }
  }
  return Modal
}
