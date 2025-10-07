import { configureStore } from '@reduxjs/toolkit';
import tripsSearchReducer from '../slices/tripsSearch';
import tripsReducer from '../slices/tripSlice';

export const store = configureStore({
  reducer: {
    tripsSearch: tripsSearchReducer,
    trips: tripsReducer,
    
  },
})

