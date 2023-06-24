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
  },
})

export const { setUser, removeUser } = authSlicer.actions
export const selectAuth = (state) => state.auth
export default authSlicer.reducer
