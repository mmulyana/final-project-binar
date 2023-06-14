import React from 'react'
import withCollapsible from './withCollapsible'
import { SelectWithCheckbox } from '../Select'

function TransitFilter() {
  return (
    <div>
      <p>Berangkat</p>
      <SelectWithCheckbox name='09.00 - 12.00'/>
    </div>
  )
}

const TransitFilterCollapsible = withCollapsible(TransitFilter)
export default TransitFilterCollapsible
