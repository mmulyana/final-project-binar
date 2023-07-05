import React from 'react'
import withCollapsible from './withCollapsible'

function Faq({ message }) {
  return (
    <div className='p-4 rounded-b bg-gray-50 text-slate-600 text-sm -mt-1 relative -z-10'>{message}</div>
  )
}

const FaqCollapsible = withCollapsible(Faq)
export default FaqCollapsible
