import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./slices/usersSlice.js";
import userReducer from "./slices/userSlice.js";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    selectUser: userReducer,
  },
});
