import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    toDoList: [],
  },
  reducers: {
    addItem: (state) => {
      state.value += 1
    },
    deleteItem: (state) => {
      state.value -= 1
    },
    changeItem: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addItem, deleteItem, changeItem } = dashboardSlice.actions

export default dashboardSlice.reducer