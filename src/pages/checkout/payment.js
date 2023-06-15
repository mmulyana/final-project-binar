import { CheckoutLayout } from "@/component/Layout"

function Payment() {
  return (
    <div>payment</div>
  )
}


Payment.getLayout = (page) => {
    return <CheckoutLayout index={2}>{page}</CheckoutLayout>
  }
  
  export default Payment