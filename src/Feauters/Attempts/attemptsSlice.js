import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../api";

export const getAttempts = createAsyncThunk(
  "attempts/getAttempts",
  async (params, { rejectWithValue }) => {
    const res = await Api()
      .get("/attempts")
      .then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue(res.data);
    }
  }
);

const attemptsSlice = createSlice({
  name: "attempts",
  initialState: {
    attempts: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getAttempts.pending]: (state, action) => {
      state.loading = true;
    },
    [getAttempts.fulfilled]: (state, action) => {
      state.attempts = action.payload;
      state.loading = false;
    },
    [getAttempts.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default attemptsSlice.reducer;
