import { createSlice } from "@reduxjs/toolkit";

// Default state for the cart feature
const initialState = {
  products_coutner: 0,
};

// Define the slice with its name, initial state, and state-updating reducers
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // Adds `action.payload` if provided, otherwise increments by 1
    increment: (state, action) => {
      state.products_coutner += action.payload || 1;
    },
    // Resets the counter back to 0
    reset: (state) => {
      state.products_coutner = 0;
    },
  },
});

export default cartSlice.reducer;
export const { increment, reset } = cartSlice.actions;
