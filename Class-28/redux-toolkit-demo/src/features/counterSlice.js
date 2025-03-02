import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  counter: 0
}

export const counterSlicce = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counter = state.counter + 1;
        },
        decrement: (state, action) => {
            state.counter = state.counter - 1;
        },
        addbyAmount: (state, action) => {
            state.counter = state.counter + action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addbyAmount } = counterSlicce.actions

export default counterSlicce.reducer