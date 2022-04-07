import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    selectUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { selectUser } = userSlice.actions;

export default userSlice.reducer;
