import { Poppins } from 'next/font/google'

import '@/styles/globals.css'
import 'react-day-picker/dist/style.css'
import '@/styles/custom-date.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
