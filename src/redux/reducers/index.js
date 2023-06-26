import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth'
import notifReducer from './notifications'

export default combineReducers({
  auth: authReducer,
  notifications: notifReducer,
})
