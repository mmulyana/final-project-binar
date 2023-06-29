import { DefaultLayout } from '@/component/Layout'

export default function CheckPage() {
  return (
    <div>check</div>
  )
}

CheckPage.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}