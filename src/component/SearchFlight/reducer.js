export const searchReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        isOpen: {
          ...state.isOpen,
          [action.payload]: !state.isOpen[action.payload],
        },
      }
    case 'onchangeIsOpen':
      return {
        ...state,
        isOpen: {
          ...state.isOpen,
          [action.payload.type]: action.payload.value,
        },
      }
    case 'switchDestionation':
      let tmp = state.data.to
      let tmpIata = state.data.destination
      return {
        ...state,
        data: {
          ...state.data,
          to: state.data.from,
          destination: state.data.origin,
          from: tmp,
          origin: tmpIata
        },
      }
    case 'onchange':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.type]: action.payload.value,
        },
      }
    case 'hideSearch':
      return {
        ...state,
        isOpen: {
          ...state.isOpen,
          searchDeparture: false,
          searchReturn: false
        }
      }
    case 'resetForm':
      return {
        ...state,
        data: {
          ...state.data,
          valueFrom: '',
          valueTo: ''
        }
      }
    case 'makeAllFalse':
      return { ...state, isOpen: { ...makeAllFalse({ ...state }) } }
    default:
      return state
  }
}

export const initialValue = {
  isOpen: {
    searchDeparture: false,
    searchReturn: false,
    date: false,
    passenger: false,
    seatClass: false,
    isReturnDate: false,
  },
  data: {
    from: 'jakarta',
    to: 'yogyakarta',
    valueFrom:'',
    valueTo:'',
    origin: 'HLP',
    destination: 'JOG',
    departureDate: '',
    returnDate: '',
    passengers: {
      adult: 1,
      kid: 0,
      baby: 0,
    },
    seatClass: 'Ekonomi',
    isOneWay: true,
  },
}

function makeAllFalse(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = false
    }
  }
  return obj
}