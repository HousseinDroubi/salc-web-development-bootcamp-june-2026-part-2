import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial async request state for the user feature
const initialState = {
  loading: false,
  users: [],
  error: null,
};

// Create an async thunk with action type prefix `"user/fetchUsers"`
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  // Return the Promise from Axios so Redux Toolkit tracks pending, fulfilled, and rejected states
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
    // Keep only users with id 1 or 2 and map each to a minimal { id, username } shape
    res.data
      .filter((user) => user.id <= 2)
      .map((user) => {
        return { id: user.id, username: user.username };
      }),
  );
});

// Define the slice; async lifecycle states are handled via `extraReducers`
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    // Runs as soon as `store.dispatch(fetchUsers())` starts
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    // Runs if the Axios request or promise chain throws/rejects
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Runs when the promise resolves; `action.payload` is the returned mapped array
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
  },
});

export default userSlice.reducer;
// Export the thunk action creator to dispatch in components or tests
export { fetchUsers };
