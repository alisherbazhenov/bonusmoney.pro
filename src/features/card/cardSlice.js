import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardItems: localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [],
}

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    deleteCard: (state, action) => {
      const itemIdToRemove = action.payload

      const updatedcardItems = state.cardItems?.filter(item => item?.id !== itemIdToRemove)

      state.wishlistItems = updatedcardItems
    },
  },
})

export const { deleteCard } = cardSlice.actions

export default cardSlice.reducer
