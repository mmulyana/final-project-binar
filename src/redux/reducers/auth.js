import { createSlice } from '@reduxjs/toolkit'

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
    updateUser: (state, action) => {
      state.user.name = action.payload.name
      state.user.phone_number = action.payload.phone_number
    },
  },
})

export const { setUser, removeUser, updateUser } = authSlicer.actions
export const selectAuth = (state) => state.auth
export default authSlicer.reducer
