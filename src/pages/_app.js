import '@/styles/globals.css'
import 'react-day-picker/dist/style.css'
import 'react-toastify/dist/ReactToastify.css'

import { Provider, useDispatch, useSelector } from 'react-redux'
import { selectAuth, setUser } from '@/redux/reducers/auth'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/router'
import { wrapper } from '@/redux'

import { Inter } from 'next/font/google'
import Cookies from 'js-cookie'
import i18n from '../../i18n'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, ...pageProps }) {
  const router = useRouter()

  if(router.locale) {
    i18n.changeLanguage(router.locale)
  }

  const getLayout = Component.getLayout ?? ((pages) => pages)
  const { store } = wrapper.useWrappedStore(pageProps)
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
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
    </GoogleOAuthProvider>
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
