// import React, { useEffect, useState } from 'react'
// import withModal from './withModal'
// import IconClose from 'public/icon/close.svg'
// import IconSearch from 'public/icon/search.svg'
// import Image from 'next/image'
// import Button from '../Button'

// const KEY = 'RECENT_SEARCH'

// const autoCompletes = ['jakarta', 'surabaya', 'yogyakarta']

// function Destination({ toggleModal, dispatch, type }) {
//   const [recents, setRecents] = useState([])
//   const [search, setSearch] = useState('')
//   const [isAutocomplete, setIsAutocomplete] = useState(false)

//   useEffect(() => {
//     const recenstLocal = localStorage.getItem(KEY)
//     if (recenstLocal) {
//       setRecents(JSON.parse(recenstLocal))
//     }

//     return () => setRecents([])
//   }, [])

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     let newRecents = recents
//     newRecents.push(search)
//     setRecents(newRecents)

//     dispatch({
//       type: 'insert',
//       payload: {
//         type,
//         value: search,
//       },
//     })

//     dispatch({ type: 'toggle', payload: 'search' })

//     localStorage.setItem(KEY, JSON.stringify(newRecents))
//   }

//   function handleDelRecent(payload) {
//     const newRecents = recents.filter((recent) => recent !== payload)
//     localStorage.setItem(KEY, JSON.stringify(newRecents))

//     setRecents(newRecents)
//   }

//   function handleRemoveRecent() {
//     localStorage.removeItem(KEY)
//     setRecents([])
//   }

//   return (
//     <div className='relative max-w-[968px] mx-auto h-full pb-20'>
//       <div className='absolute top-[370px] left-1/2 -translate-x-1/2 z-50 h-3 w-full'>
//         <div className='max-w-[700px] mx-auto px-4'>
//           <div className='1mx-auto'>
//             <div className='grid grid-cols-[1fr_16px] gap-2 md:gap-[10px] px-[22px] py-6 bg-white rounded-xl '>
//               <div className='relative'>
//                 <Image
//                   src={IconSearch}
//                   h={16}
//                   w={16}
//                   className='absolute top-1/2 -translate-y-1/2 left-2 hidden md:block cursor-pointer'
//                   onClick={handleSubmit}
//                   alt='search icon'
//                 />
//                 <form onSubmit={handleSubmit}>
//                   <input
//                     placeholder='Masukan Kota atau Negara'
//                     className='h-10 rounded border border-neutral-3 outline-none px-4 md:px-12 w-full'
//                     autoFocus
//                     value={search}
//                     onChange={(e) => {
//                       setSearch(e.target.value)
//                       setIsAutocomplete(true)
//                     }}
//                   />
//                   <button type='submit' hidden />
//                 </form>
//               </div>
//               <button onClick={toggleModal}>
//                 <Image src={IconClose} w={16} h={16} alt='close button' />
//               </button>
//             </div>

//             {recents.length > 0 || search !== '' ? (
//               <div
//                 className={[
//                   'mt-2 px-[22px] py-6 rounded-xl',
//                   autoCompletes.filter((item) => item.includes(search.toLowerCase())).length > 0 ? 'bg-white' : '',
//                 ].join(' ')}
//               >
//                 {search !== '' && isAutocomplete ? (
//                   <div className='flex flex-col gap-2'>
//                     {autoCompletes
//                       .filter((item) => item.includes(search.toLowerCase()))
//                       .map((item, index) => (
//                         <div
//                           key={index}
//                           className='flex items-center py-2 justify-between hover:bg-gray-200 px-3 rounded cursor-pointer'
//                           onClick={() => {
//                             setSearch(item)
//                             setIsAutocomplete(false)
//                           }}
//                         >
//                           <p>{item}</p>
//                         </div>
//                       ))}
//                   </div>
//                 ) : null}

//                 {recents.length > 0 ? (
//                   <div className='flex justify-between items-center mt-2 mb-2'>
//                     <p className='title-16-medium text-neutral-5'>
//                       Pencarian Terkini
//                     </p>
//                     <Button
//                       className='text-alert-danger body-14-medium'
//                       onClick={handleRemoveRecent}
//                     >
//                       Hapus
//                     </Button>
//                   </div>
//                 ) : null}
//                 {recents.map((item, index) => (
//                   <div
//                     className='flex items-center py-2 justify-between hover:bg-gray-200 px-3 rounded cursor-pointer'
//                     key={index}
//                     onClick={() => setSearch(item)}
//                   >
//                     <p>{item}</p>
//                     <Button
//                       onClick={() => {
//                         handleDelRecent(item)
//                         setIsAutocomplete(false)
//                       }}
//                     >
//                       <Close />
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const DestinationModal = withModal(Destination)
// export default DestinationModal

// const Close = () => (
//   <svg
//     width='20'
//     height='20'
//     viewBox='0 0 20 20'
//     fill='none'
//     xmlns='http://www.w3.org/2000/svg'
//   >
//     <path
//       d='M5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L8.58579 10L4.29289 14.2929C3.90237 14.6834 3.90237 15.3166 4.29289 15.7071C4.68342 16.0976 5.31658 16.0976 5.70711 15.7071L10 11.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L11.4142 10L15.7071 5.70711C16.0976 5.31658 16.0976 4.68342 15.7071 4.29289C15.3166 3.90237 14.6834 3.90237 14.2929 4.29289L10 8.58579L5.70711 4.29289Z'
//       fill='#8A8A8A'
//     />
//   </svg>
// )

import React from 'react'

export default function DestinationModal() {
  return (
    <div>DestinationModal</div>
  )
}
