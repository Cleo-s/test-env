const { createReducer } = require("@reduxjs/toolkit")
const { increment, decrement } = require("../actions")

const initialState = {
   counter: 0
}

export const counterReducer = createReducer(initialState, builder => {
   builder.addCase(increment, (state, action) => {
      state.counter += +action.payload;
   }).addCase(decrement, (state, action) => {
      state.counter -= +action.payload;
   })
})
