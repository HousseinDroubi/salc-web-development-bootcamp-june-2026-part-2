import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type cartInitialStateType = {
  produts_counter: number;
};

const initialState: cartInitialStateType = {
  produts_counter: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.produts_counter += action.payload;
    },
    reset: (state) => {
      state.produts_counter = 0;
    },
  },
});

export default cartSlice.reducer;
export const { increment, reset } = cartSlice.actions;
