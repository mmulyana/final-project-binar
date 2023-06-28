import withCollapsible from './withCollapsible'
import { SelectWithCheckbox } from '../Select'

function AirlineFilter({ data, setData, isActiveFilter, setIsActiveFilter}) {

  function handleClick(id) {
    const newData = data
      .map((prev) => {
        if (prev.id === id) {
          return { ...prev, isActive: !prev.isActive }
        }
        return prev
      })

    setData(newData)
    if(!isActiveFilter) {
      setIsActiveFilter(true)
    }
  }
  return (
    <div className='flex flex-col gap-2 pb-4'>
      {data.map((d, index) => (
        <SelectWithCheckbox
          name={d.title}
          isChecked={d.isActive}
          key={index}
          onClick={() => handleClick(d.id)}
        />
      ))}
    </div>
  )
}

const AirlineFilterCollapsible = withCollapsible(AirlineFilter)
export default AirlineFilterCollapsible
