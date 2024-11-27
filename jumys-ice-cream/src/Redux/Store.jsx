import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/ProductSlice'


export const store = configureStore(
  {
  reducer: {
    counter: counterReducer,
    },
})
