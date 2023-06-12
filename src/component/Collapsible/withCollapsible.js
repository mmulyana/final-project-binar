import { useEffect, useState } from 'react'
import Portal from '../Portal'
import Button from '../Button'
import Image from 'next/image'

export default function withCollapsible(WrappedComponent) {
  function Collapsible({ name, ...props }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className='w-full h-fit'>
        <div className='h-16 w-full bg-white flex items-center justify-between'>
          <p>{name}</p>
          <Button
            onClick={() => setIsOpen(!isOpen)}
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
        </div>
        {isOpen ? <WrappedComponent {...props} /> : null}
      </div>
    )
  }
  return Collapsible
}
