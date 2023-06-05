import { useRouter } from 'next/router'
import React from 'react'

export default function Login() {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/')}>back</button>
    </div>
  )
}
