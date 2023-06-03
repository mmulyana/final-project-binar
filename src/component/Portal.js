import ReactDOM from 'react-dom'

const Portal = (Component) => (props) => {
  if (typeof window !== 'undefined')
    return ReactDOM.createPortal(
      <Component {...props} />,
      document.getElementById('modal')
    )
}

export default Portal
