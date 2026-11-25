import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products_coutner: 0,
};

const counterSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.products_coutner += action.payload ?? 1;
    },
    reset: (state) => {
      state.products_coutner = 0;
    },
  },
});

export default counterSlice.reducer;
export const { increment, reset } = counterSlice.actions;
