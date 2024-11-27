import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    count:10
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
    },
  })
  
  export const { increment, decrement } = counterSlice.actions
  
  export default counterSlice.reducer