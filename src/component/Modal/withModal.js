import { useEffect } from 'react'

export default function withModal(WrappedComponent) {
  function modal({ isOpen, toggleModal, className }) {
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
    }, [isOpen, toggleModal])

    if (isOpen) {
      return (
        <div
          className={`z-50 absolute ${className}`}
        >
          <WrappedComponent toggleModal={toggleModal} />
        </div>
      )
    }
  }
  return modal
}
