import { useState } from 'react'
import Button from '../Button'
import Image from 'next/image'

export default function withCollapsible(WrappedComponent) {
  function Collapsible({ name, className, component = null, ...props }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className='w-full h-fit'>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={[
            'h-16 w-full bg-white flex items-center justify-between',
            className ? className : '',
          ].join(' ')}
        >
          {component !== null ? (
            {...component}
          ) : (
            <>
              <p className='cursor-pointer'>{name}</p>
              <Button
                className={[
                  'duration-150 ease-in',
                  isOpen ? 'rotate-180' : 'rotate-0',
                ].join(' ')}
              >
                <Image
                  src='/icon/chevron-down.svg'
                  alt='open collapsible filter'
                  height={24}
                  width={24}
                />
              </Button>
            </>
          )}
        </div>
        {isOpen ? <WrappedComponent {...props} /> : null}
      </div>
    )
  }
  return Collapsible
}
