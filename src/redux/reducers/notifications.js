import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

const notifySlicer = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.data = action.payload
    },
    updateNotifications: (state, action) => {
      const { id } = action.payload
      const tmp = state.data.find((t) => t.id === id)
      if (tmp) {
        tmp.is_read = true
      }
    },
  },
})

export const { setNotifications, updateNotifications } = notifySlicer.actions
export const selectNotif = (state) => state.notifications
export default notifySlicer.reducer
