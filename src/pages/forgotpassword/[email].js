import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ForgotPasswordEmail() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (router.isReady) {
      setEmail(router.query.email)
    }
  }, [router.isReady])
  return <div className='max-w-[420px] mx-auto pt-20 px-4'>

  </div>
}
