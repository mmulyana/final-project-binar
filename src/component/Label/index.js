import { configs } from './configs'

export default function Label({ text, state, ...props }) {
  const classNames = [
    'px-3 py-1 rounded flex items-center justify-center text-xs',
    configs?.state?.[state] || '',
    props.className || '',
  ].join(' ')

  return <div className={classNames}>{text}</div>
}
