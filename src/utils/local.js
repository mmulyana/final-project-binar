import pic1 from 'public/image/picture1.png'
import pic2 from 'public/image/picture2.png'
import pic3 from 'public/image/picture3.png'
import pic4 from 'public/image/picture4.png'

const seatClassData = [
  {
    id: 0,
    name: 'Ekonomi',
    isSelected: true,
  },
  {
    id: 1,
    name: 'Ekonomi Premium',
    isSelected: false,
  },
  {
    id: 2,
    name: 'Bisnis',
    isSelected: false,
  },
  {
    id: 3,
    name: 'First',
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
    price: 900000,
  },
  {
    from: 'jakarta',
    to: 'seoul',
    airline: 'singapore airline',
    daparturedDate: '2023-06-07',
    arrivalDate: '2023-06-20',
    price: 7603200,
  },
  {
    from: 'jakarta',
    to: 'berlin',
    airline: 'qatar airline',
    daparturedDate: '2023-06-07',
    arrivalDate: '2023-06-30',
    price: 1200000,
  },
  {
    from: 'jakarta',
    to: 'tokyo',
    airline: 'japan airline',
    daparturedDate: '2023-06-07',
    arrivalDate: '2023-06-30',
    price: 900000,
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
  },
]

const filterTicketByPriceAndTime = [
  {
    id: 0,
    name: 'Termurah',
    price: 809000,
    isActive: true
  },
  {
    id: 1,
    name: 'Tercepat',
    price: 1209000,
    isActive: false
  },
  {
    id: 2,
    name: 'Terbaik',
    price: 1009000,
    isActive: false
  },
]

export {
  seatClassData,
  suggestions,
  flights,
  suggestDestination,
  filterTicketByPriceAndTime,
}
