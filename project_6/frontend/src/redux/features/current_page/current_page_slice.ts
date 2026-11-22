import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  currentPageInitialState,
  currentPageType,
} from "../../../types/redux/current_page";

const initialState: currentPageInitialState = {
  current_page: "todos",
};

const currentPageSlice = createSlice({
  name: "current_page",
  initialState,
  reducers: {
    updateCurrentPage: (state, action: PayloadAction<currentPageType>) => {
      state.current_page = action.payload;
    },
  },
});

export default currentPageSlice.reducer;
export const { updateCurrentPage } = currentPageSlice.actions;
