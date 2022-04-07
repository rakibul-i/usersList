import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
  },
  reducers: {
    loadUsers: (state, action) => {
      state.users = [...action.payload];
    },
  },
});

export const { loadUsers } = usersSlice.actions;

export default usersSlice.reducer;
