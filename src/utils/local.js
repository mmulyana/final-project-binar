import pic1 from 'public/image/picture1.png'
import pic2 from 'public/image/picture2.png'
import pic3 from 'public/image/picture3.png'
import pic4 from 'public/image/picture4.png'

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

const suggestDestination = [
  {
    nation: 'singapura',
    img: pic1,
  },
  {
    nation: 'korea selatan',
    img: pic2,
  },
  {
    nation: 'jepang',
    img: pic3,
  },
  {
    nation: 'swiss',
    img: pic4,
  }
]

export { seatClassData, suggestions, flights, suggestDestination }
