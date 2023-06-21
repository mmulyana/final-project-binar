import api from '@/services/api'
import { setUser } from '../reducers/auth'

export const getProfile = (id) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth
    if (user) {
      return
    }

    try {
      const { data } = await api(`users/${id}`)

      if (data.status) {
        dispatch(setUser(data.data))
      }
    } catch (err) {
      console.log(err)
    }

    return true
  } catch (error) {}
}
