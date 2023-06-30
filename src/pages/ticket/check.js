import { SecondaryLayout } from "@/component/Layout"

export default function CheckPage() {
  return (
    <div className='pt-20 max-w-[1200px] mx-auto px-4'>
      <div className='grid grid-cols-[2fr_10fr]'>
        <div className='bg-gray-300'></div>
        <div className='bg-gray-200'></div>
      </div>
    </div>
  )
}

CheckPage.getLayout = (page) => {
  return <SecondaryLayout>{page}</SecondaryLayout>
}