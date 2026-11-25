import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.mode = state.mode == "light" ? "dark" : "light";
    },
  },
});

export default themeSlice.reducer;
export const { toggle } = themeSlice.actions;
