import { parseJwt } from '@/utils'
import { setUser } from '../reducers/auth'
import api from '@/services/api'
import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

export const getProfile = (id) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth
    if (user) {
      return
    }

    try {
      const jwt = Cookies.get('jwt')
      const { data } = await api(`/users/${id}`, {
        headers: {
          Authorization: jwt,
        },
      })

      if (data.status) {
        dispatch(setUser(data.data))
      }
    } catch (err) {
      console.log(err)
    }

    return true
  } catch (error) {}
}

export const LoginWithGoogle =
  (access_token, toggleModal) => async (dispatch) => {
    try {
      let body = {
        access_token,
      }

      const { data } = await api.post('/auth/login-google', body)
      console.log(data)
      if (data.status) {
        Cookies.set('jwt', data.data.token, { expires: 1 })
        const jwt = parseJwt(data.data.token)
        Cookies.set('id', jwt.id, { expires: 1 })
        const { data: dataProfile } = await api(`/users/${jwt.id}`, {
          headers: {
            Authorization: data.data.token,
          },
        })
        Cookies.set('profile', JSON.stringify(dataProfile.data), { expires: 1 })

        dispatch(setUser(dataProfile.data))
        toast.success(`welcome back ${dataProfile.data.name}`)
        toggleModal()
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message)
        return
      }
      toast.error(error.message)
    }
  }
