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

const seatesFlight = [
  {
    row: 'A',
    col: [
      { no: 1, isSelected: false },
      { no: 2, isSelected: false },
      { no: 3, isSelected: false },
      { no: 4, isSelected: false },
      { no: 5, isSelected: false },
      { no: 6, isSelected: false },
      { no: 7, isSelected: false },
      { no: 8, isSelected: false },
      { no: 9, isSelected: false },
      { no: 10, isSelected: false },
      { no: 11, isSelected: false },
      { no: 12, isSelected: false },
    ],
  },
  {
    row: 'B',
    col: [
      { no: 1, isSelected: false },
      { no: 2, isSelected: false },
      { no: 3, isSelected: false },
      { no: 4, isSelected: false },
      { no: 5, isSelected: false },
      { no: 6, isSelected: false },
      { no: 7, isSelected: false },
      { no: 8, isSelected: false },
      { no: 9, isSelected: false },
      { no: 10, isSelected: false },
      { no: 11, isSelected: false },
      { no: 12, isSelected: false },
    ],
  },
  { row: '', col: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  {
    row: 'C',
    col: [
      { no: 1, isSelected: false },
      { no: 2, isSelected: false },
      { no: 3, isSelected: false },
      { no: 4, isSelected: false },
      { no: 5, isSelected: false },
      { no: 6, isSelected: false },
      { no: 7, isSelected: false },
      { no: 8, isSelected: false },
      { no: 9, isSelected: false },
      { no: 10, isSelected: false },
      { no: 11, isSelected: false },
      { no: 12, isSelected: false },
    ],
  },
  {
    row: 'D',
    col: [
      { no: 1, isSelected: false },
      { no: 2, isSelected: false },
      { no: 3, isSelected: false },
      { no: 4, isSelected: false },
      { no: 5, isSelected: false },
      { no: 6, isSelected: false },
      { no: 7, isSelected: false },
      { no: 8, isSelected: false },
      { no: 9, isSelected: false },
      { no: 10, isSelected: false },
      { no: 11, isSelected: false },
      { no: 12, isSelected: false },
    ],
  },
]

const imagesCities = {
  yogyakarta: '/image/yogyakarta.jpg',
  makassar: '/image/makassar.jpg',
  biak: '/image/Biak.jpg',
  kupang: '/image/Kupang.jpg',
  manado: '/image/Manado.jpg',
  surabaya: '/image/Surabaya.jpg',
  ambon: '/image/ambon.jpg',
  jakarta: '/image/jakarta.jpg',
  labuanbajo: '/image/labuanbajo.jpg',
  palembang: '/image/palembang.jpg',
  gorontalo: '/image/gorontalo.jpg',
}

const dataFilterTime = [
  {
    id: 1,
    isActive: false,
    fromTime: '06:00',
    toTime: '09:00',
    title: 'Pagi',
  },
  {
    id: 2,
    isActive: false,
    fromTime: '10:00',
    toTime: '12:00',
    title: 'Siang',
  },
  {
    id: 3,
    isActive: false,
    fromTime: '13:00',
    toTime: '20:00',
    title: 'Sore - Malam',
  },
]

const dataAirline = [
  {
    id: 1,
    isActive: false,
    title: 'citilink',
    value: 'citilink',
  },
  {
    id: 2,
    isActive: false,
    title: 'Batik air',
    value: 'batikair',
  },
  {
    id: 3,
    isActive: false,
    title: 'Garuda',
    value: 'garuda',
  },
  {
    id: 4,
    isActive: false,
    title: 'Air asia',
    value: 'airasia',
  },
  {
    id: 5,
    isActive: false,
    title: 'Lion air',
    value: 'lionair',
  },
]

export {
  dataFilterTime,
  dataAirline,
  seatClassData,
  suggestions,
  flights,
  suggestDestination,
  filterTicketByPriceAndTime,
  seatesFlight,
  imagesCities
}
