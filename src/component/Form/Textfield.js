export default function Textfield({
  name,
  value,
  onChange,
  withLabel = false,
  label,
  ...props
}) {
  return (
    <div>
      {!!withLabel && (
        <label
          htmlFor={props.id}
          className='text-xs text-gray-700 mb-1 block font-medium capitalize'
        >
          {label}
        </label>
      )}
      <div
        className={[
          'relative h-12 w-full rounded bg-[#F4F4F4] px-4 flex items-center border',
          props.disabled ? 'text-gray-400' : '',
          props.className ? props.className : ''
        ].join(' ')}
      >
        <input
          name={name}
          value={value}
          id={props.id}
          {...props}
          className='bg-transparent outline-none w-full'
          onChange={onChange}
          placeholder={withLabel ? props.placeholder : ''}
        />
        {!withLabel && (
          <label
            className={[
              'absolute left-4 top-3 text-base text-gray-500 capitalize cursor-text',
              value !== '' ? 'hidden' : '',
            ].join(' ')}
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  )
}
