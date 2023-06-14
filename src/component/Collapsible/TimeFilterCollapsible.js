import React from 'react'
import withCollapsible from './withCollapsible'

function TimeFilter() {
  return (
    <div>
      <p>timefiltercollapsible component</p>
    </div>
  )
}

const TimeFilterCollapsible = withCollapsible(TimeFilter)
export default TimeFilterCollapsible
