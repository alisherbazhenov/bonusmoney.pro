import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCardsData } from '../../api/cardsData.js'

const initialState = {
  loading: false,
  data: [],
  error: null,
}

export const fetchData = createAsyncThunk('cards/fetchCardsData', ({ offset }) => fetchCardsData({ offset }))

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    deleteCard: (state, action) => {
      const companyId = action.payload
      const updatedData = state.data?.filter(item => item.company.companyId !== companyId)
      state.data = updatedData
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false
        state.data = [...state.data, ...action.payload]
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { deleteCard } = cardSlice.actions

export default cardSlice.reducer
