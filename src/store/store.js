import { configureStore } from '@reduxjs/toolkit'
import tripsSearchReducer from '../slices/tripsSearch'

export const store = configureStore({
  reducer: {
    tripsSearch: tripsSearchReducer,
    
  },
})