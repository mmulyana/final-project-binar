import Image from 'next/image'

export default function CardSuggest({ data }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6'>
      {data.map((suggest, index) => (
        <div
          key={index}
          className='md:grid grid-cols-2 md:grid-cols-[160px_1fr] gap-6 rounded-lg h-[104px] items-center relative rounded-t-md rounded-b-md bg-white hover:shadow-sm flex'
        >
          <Image
            src={suggest.img}
            height={160}
            width={160}
            className='h-full rounded-l-md object-cover'
            alt={suggest.nation}
          />
          <h5 className='text-base capitalize md:text-lg text-slate-600'>
            {suggest.nation}
          </h5>
        </div>
      ))}
    </div>
  )
}
