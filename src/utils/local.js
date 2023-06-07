const seatClassData = [
  {
    id: 0,
    name: 'economy',
    price: 4950000,
    isSelected: true,
  },
  {
    id: 1,
    name: 'premium economy',
    price: 7550000,
    isSelected: false,
  },
  {
    id: 2,
    name: 'business',
    price: 29220000,
    isSelected: false,
  },
  {
    id: 3,
    name: 'first class',
    price: 87620000,
    isSelected: false,
  },
]

const suggestions = [
  {
    nation: 'indonesia',
    city: 'Jakarta',
  },
  {
    nation: 'indonesia',
    city: 'yogyakarta',
  },
  {
    nation: 'japan',
    city: 'tokyo',
  },
  {
    nation: 'German',
    city: 'Berlin',
  },
]

const flights = [
  {
    from: 'jakarta',
    to: 'tokyo',
    airline: 'garuda',
    daparturedDate: '2023-06-07',
    arrivalDate: '2023-06-20',
    price: 900000
  },
  {
    from: 'jakarta',
    to: 'seoul',
    airline: 'singapore airline',
    daparturedDate: '2023-06-07',
    arrivalDate: '2023-06-20',
    price: 7603200
  },
  {
    from: 'jakarta',
    to: 'berlin',
    airline: 'qatar airline',
    daparturedDate: '2023-06-07',
    arrivalDate: '2023-06-30',
    price: 1200000
  },
  {
    from: 'jakarta',
    to: 'tokyo',
    airline: 'japan airline',
    daparturedDate: '2023-06-07',
    arrivalDate: '2023-06-30',
    price: 900000
  },
]

export { seatClassData, suggestions, flights }
