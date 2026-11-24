import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products_coutner: 10,
};

const lastOrderSlice = createSlice({
  name: "last_order",
  initialState: initialState,
  reducers: {
    removeFromOrder: (state, action) => {
      state.products_coutner -= action.payload;
    },
  },
});

export default lastOrderSlice.reducer;
export const { removeFromOrder } = lastOrderSlice.actions;
