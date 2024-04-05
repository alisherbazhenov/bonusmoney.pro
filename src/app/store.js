import { configureStore } from '@reduxjs/toolkit'
import cardSlice from '../features/card/cardSlice'

export const store = configureStore({
  reducer: {
    cards: cardSlice,
  },
})
