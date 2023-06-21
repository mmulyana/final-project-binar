import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import rootReducers from './reducers'

const makeStore = () =>
  configureStore({
    reducer: rootReducers,
    devTools: process.env.NODE_ENV === 'development',
  })

export const wrapper = createWrapper(makeStore)
