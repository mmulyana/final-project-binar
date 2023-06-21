import { configs } from './configs'

export default function Label({ text, state, ...props }) {
  const classNames = [
    'px-4 py-2 rounded-full flex items-center justify-center text-xs font-thin',
    configs?.state?.[state] || '',
    props.className || '',
  ].join(' ')

  return <div className={classNames}>{text}</div>
}
