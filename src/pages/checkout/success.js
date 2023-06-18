import { CheckoutLayout } from "@/component/Layout"

function Success() {
  return (
    <div>Success</div>
  )
}


Success.getLayout = (page) => {
  return <CheckoutLayout index={3}>{page}</CheckoutLayout>
}

export default Success
