import Image from 'next/image'

export default function CardSuggest({ data }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {data.map((suggest, index) => (
        <div
          key={index}
          className='grid grid-cols-[160px_1fr] gap-6 rounded-lg h-[104px] items-center relative rounded-t-md rounded-b-md bg-white hover:shadow-sm'
        >
          <Image
            src={suggest.img}
            height={104}
            width={160}
            className='h-full rounded-l-md object-cover'
            alt={suggest.nation}
          />
          <h5 className='text-xl font-medium text-slate-800'>{suggest.nation}</h5>
        </div>
      ))}
    </div>
  )
}
