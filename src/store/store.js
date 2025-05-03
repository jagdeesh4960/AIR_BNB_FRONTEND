import { configureStore } from "@reduxjs/toolkit";
import { login } from "./userSlice";

export const store = configureStore({
  reducer: {
    users: login,
  },
});
