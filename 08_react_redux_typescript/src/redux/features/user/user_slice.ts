import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type user = {
  id: number;
  username: string;
};

export type userInitialStateType = {
  loading: boolean;
  users: user[];
  error: null | string;
};

const initialState: userInitialStateType = {
  loading: false,
  users: [],
  error: null,
};

const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.data
      .filter((user: user) => user.id <= 2)
      .map((user: user) => {
        return { id: user.id, username: user.username };
      }),
  );
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
  },
});

export default userSlice.reducer;
export { fetchUsers };
