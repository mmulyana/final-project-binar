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
    departureDate: new Date(),
    returnDate: '',
    passengers: {
      adult: 1,
      kids: 0,
      baby: 0,
    },
    seatClass: 'Bussines',
  },
}
