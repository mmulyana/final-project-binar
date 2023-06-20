import React, { useState, useEffect, useRef } from 'react'

const withDrawer = (WrappedComponent) => {
  const Drawer = ({ isOpen, onClose, ...props }) => {
    const drawerRef = useRef(null)

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
          onClose()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [onClose])

    return (
      <>
        <div
          className={['relative drawer', isOpen ? 'open' : ''].join(' ')}
          ref={drawerRef}
        >
          <WrappedComponent onClose={onClose} {...props} />
        </div>
      </>
    )
  }

  return Drawer
}

export default withDrawer
