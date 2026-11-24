import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products_coutner: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.products_coutner += action.payload || 1;
    },
    reset: (state) => {
      state.products_coutner = 0;
    },
  },
});

export default cartSlice.reducer;
export const { increment, reset } = cartSlice.actions;
