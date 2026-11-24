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
  extraReducers: (builder) => {
    builder.addCase("last_order/removeFromOrder", (state, action) => {
      state.products_coutner += action.payload;
    });
  },
});

export default cartSlice.reducer;
export const { increment, reset } = cartSlice.actions;
