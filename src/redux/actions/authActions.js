import api from '@/services/api'
import { setUser } from '../reducers/auth'
import Cookies from 'js-cookie'

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
          Authorization: jwt
        }
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

export const LoginWithGoogle = (access_token) => async (dispatch) => {
  try {
    let body = JSON.stringify({
      access_token
    })

    const { data } = await api.post('/auth/login-google', body)
    console.log(data)
  } catch(err) {

  }
}