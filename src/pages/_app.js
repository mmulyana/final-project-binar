import { Inter } from 'next/font/google'

import '@/styles/globals.css'
import 'react-day-picker/dist/style.css'
import { wrapper } from '@/redux'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { selectAuth, setUser } from '@/redux/reducers/auth'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Cookies from 'js-cookie'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, ...pageProps }) {
  const getLayout = Component.getLayout ?? ((pages) => pages)
  const { store } = wrapper.useWrappedStore(pageProps)
  return (
    <Provider store={store}>
      <main className={inter.className}>
        {Component.auth ? (
          <Auth hasLoggedIn={Component.auth.hasLoggedIn}>
            {getLayout(<Component {...pageProps} />)}
          </Auth>
        ) : (
          getLayout(<Component {...pageProps} />)
        )}
      </main>
      <ToastContainer />
    </Provider>
  )
}

function Auth({ children, hasLoggedIn }) {
  const router = useRouter()
  const { user } = useSelector(selectAuth)
  const dispatch = useDispatch()

  const profile = Cookies.get('profile')
  const jwt = Cookies.get('jwt')

  // jika user null tapi ada data di cookie
  if (!user && profile) {
    dispatch(setUser(JSON.parse(profile)))
  }

  if (router.isReady && hasLoggedIn && !jwt) {
    router.push('/')
  }

  return children
}
