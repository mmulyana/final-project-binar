// import Image from 'next/image'
// import withModal from './withModal'
// import Counter from '../Form/Counter'
// import { useState } from 'react'

// import IconClose from 'public/icon/close.svg'
// import IconMan from 'public/icon/man.svg'
// import IconBaby from 'public/icon/baby.svg'
// import IconKids from 'public/icon/kids.svg'
// import Button from '../Button'

// function Passengers({ toggleModal, className }) {
//   const [mature, setMature] = useState(1)
//   const [kids, setKids] = useState(0)
//   const [baby, setBaby] = useState(0)

//   return (
//     <div className='relative max-w-[968px] mx-auto h-full'>
//       <div className='absolute top-[540px] right-4 z-50'>
//         <div className='bg-white rounded-2xl max-w-[400px] h-fit'>
//           <div className='px-4 py-[14px] flex justify-end items-center border-b border-neutral-2'>
//             <button onClick={toggleModal}>
//               <Image src={IconClose} h={16} w={16} />
//             </button>
//           </div>

//           {/* counters */}
//           <div className='mt-[5px] px-[10px]'>
//             <div className='p-4 flex flex-col gap-2'>
//               {/* mature */}
//               <div className='flex items-center justify-between pb-2 border-b border-neutral-2'>
//                 <div className='flex items-start gap-2'>
//                   <Image src={IconMan} w={24} h={24} />
//                   <div>
//                     <p className='text-neutral-5 body-14-bold'>Dewasa</p>
//                     <p className='text-neutral-3 body-12-regular mt-1'>
//                       (12 Tahun Keatas)
//                     </p>
//                   </div>
//                 </div>
//                 <Counter
//                   counter={mature}
//                   inc={() => setMature((prev) => prev + 1)}
//                   dec={() => {
//                     if (mature > 1) {
//                       setMature((prev) => prev - 1)
//                     }
//                   }}
//                   handleChange={(e) => setMature(e.target.value)}
//                 />
//               </div>

//               {/* kids */}
//               <div className='flex items-center justify-between pb-2 border-b border-neutral-2'>
//                 <div className='flex items-start gap-2'>
//                   <Image src={IconKids} w={24} h={24} />
//                   <div>
//                     <p className='text-neutral-5 body-14-bold'>Anak</p>
//                     <p className='text-neutral-3 body-12-regular mt-1'>
//                       (2 - 11 Tahun)
//                     </p>
//                   </div>
//                 </div>
//                 <Counter
//                   counter={kids}
//                   inc={() => setKids((prev) => prev + 1)}
//                   dec={() => {
//                     if (kids > 0) {
//                       setKids((prev) => prev - 1)
//                     }
//                   }}
//                   handleChange={(e) => setKids(e.target.value)}
//                 />
//               </div>

//               {/* baby */}
//               <div className='flex items-center justify-between pb-2 border-b border-neutral-2'>
//                 <div className='flex items-start gap-2'>
//                   <Image src={IconBaby} w={24} h={24} />
//                   <div>
//                     <p className='text-neutral-5 body-14-bold'>Bayi</p>
//                     <p className='text-neutral-3 body-12-regular mt-1'>
//                       (Dibawah 2 tahun)
//                     </p>
//                   </div>
//                 </div>
//                 <Counter
//                   counter={baby}
//                   inc={() => setBaby((prev) => prev + 1)}
//                   dec={() => {
//                     if (baby > 0) {
//                       setBaby((prev) => prev - 1)
//                     }
//                   }}
//                   handleChange={(e) => setBaby(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className='flex justify-end items-center pb-3 px-4'>
//             <Button
//               onClick={toggleModal}
//               className='h-12 w-[150px] rounded-xl bg-primary-purple-5 text-white title-16-medium'
//             >
//               Simpan
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const PassengersModal = withModal(Passengers)
// export default PassengersModal

import React from 'react'

export default function PassengersModal() {
  return (
    <div>PassengersModal</div>
  )
}
