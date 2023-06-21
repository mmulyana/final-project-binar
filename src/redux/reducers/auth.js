import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  user: null,
}

const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    removeUser: (state) => {
      state.user = null
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
        return {
            ...state,
            ...action.payload.auth
        }
    }
  }
})

export const { setUser, removeUser } = authSlicer.actions
export const selectAuth = (state) => state.auth
export default authSlicer.reducer
