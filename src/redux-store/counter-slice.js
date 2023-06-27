import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counter = createSlice({
   name: 'counter',
   initialState,
   reducers: {
    increment: (state) => {
        state.count += 1
    },

    decrement: (state) => {
        state.count -= 1
    },

    incrementCount: (state, action) => {
        state.count += action.payload
    },

    reset: (state) => {
        state.count = 0
    }
   }
})

export const {increment, decrement, incrementCount, reset} = counter.actions

export default counter.reducer