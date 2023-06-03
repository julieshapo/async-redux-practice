import { createAsyncThunk } from "@reduxjs/toolkit";
import { sighUp } from "../../services/authApi";

export const sighUpThunk = createAsyncThunk(
  "auth/signUp",
  async (user, thunkAPI) => {
    try {
      return await sighUp(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
