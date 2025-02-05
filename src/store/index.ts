import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authReducer.ts'
import { useDispatch } from 'react-redux'

import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : [])),
})


export type IRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 