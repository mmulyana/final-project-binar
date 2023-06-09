import { Inter } from 'next/font/google'

import '@/styles/globals.css'
import 'react-day-picker/dist/style.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((pages) => pages)
  return (
    <main className={inter.className}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  )
}
