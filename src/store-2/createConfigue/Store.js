
import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from '../createReducer/ProducSlice'


export const store = configureStore({
  reducer: {
    products:ProductSlice,
  },
})