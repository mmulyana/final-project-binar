import Image from 'next/image'

export default function TextfieldCredit({
  name,
  value,
  img,
  label,
  onChange,
  ...props
}) {
  return (
    <div>
      <label
        htmlFor='credit'
        className='text-xs text-gray-700 mb-2 block font-medium capitalize'
      >
        {label}
      </label>
      <div
        className={[
          'relative h-12 w-full rounded bg-[#F4F4F4] px-4 flex items-center border gap-2',
          props.disabled ? 'text-gray-400' : '',
        ].join(' ')}
      >
        <Image src={img} height={24} width={24} alt='credit card logo' />
        <input
          name={name}
          value={value}
          id='credit'
          className='bg-transparent outline-none w-full'
          onChange={onChange}
          placeholder={props.placeholder}
          max={19}
          min={16}
          {...props}
        />
      </div>
    </div>
  )
}
