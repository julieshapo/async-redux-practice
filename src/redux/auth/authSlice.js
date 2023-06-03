import { createSlice } from "@reduxjs/toolkit";
import { sighUpThunk } from "./authOperations";

const initialState = {
  user: {
    login: "",
  },
  isAuth: false,
  isLoading: false,
  error: "",
};

const handleUserSignUpPending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleUserSignUpFulfilled = (state, action) => {
  state.user = {
    login: action.payload.login,
  };
  state.isLoading = false;
  state.isAuth = true;
};

const handleUserSignUpRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(sighUpThunk.pending, handleUserSignUpPending)
      .addCase(sighUpThunk.fulfilled, handleUserSignUpFulfilled)
      .addCase(sighUpThunk.rejected, handleUserSignUpRejected);
  },
});

export const authSignUpReducer = authSlice.reducer;
