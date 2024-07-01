import { configureStore } from '@reduxjs/toolkit'
import moviereducer from './reducers/movieSlice'
import tvreducer from './reducers/tvSlice'
import personreducer from './reducers/personSlice'

export const store = configureStore({
  reducer: {
    movie : moviereducer,
    tv: tvreducer,
    person : personreducer
  },
})