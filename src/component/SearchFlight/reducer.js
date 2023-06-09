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
      return {
        ...state,
        data: {
          ...state.data,
          to: state.data.from,
          from: tmp,
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
    default:
      return state
  }
}

export const initialValue = {
  isOpen: {
    search: false,
    date: false,
    passenger: false,
    seatClass: false,
    isReturnDate: false,
  },
  data: {
    from: 'Jakarta',
    to: 'Melbourne',
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
