import { configureStore } from "@reduxjs/toolkit";
import { authSignUpReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSignUpReducer,
  },
});
