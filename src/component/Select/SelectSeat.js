export default function SelectSeat({ data, handleSelect }) {
  return (
    <div className='flex justify-center'>
      <div className='flex gap-2'>
        {data.map((data, index) => (
          <div key={index}>
            <div className='w-8 h-8 text-center'>
              <p>{data.row}</p>
            </div>
            <div className='flex flex-col gap-2'>
              {data.row !== ''
                ? data.col.map((col, idx) => (
                    <div
                      key={idx}
                      className={[
                        'w-8 h-8 rounded cursor-pointer',
                        col.isSelected ? 'bg-blue-700' : 'bg-gray-300',
                      ].join(' ')}
                      onClick={() => handleSelect(data, col, idx)}
                    />
                  ))
                : data.col.map((col, idx) => (
                    <p
                      key={idx}
                      className='w-8 h-8 flex items-center justify-center'
                    >
                      {col + 1}
                    </p>
                  ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
