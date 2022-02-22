import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api";

export const getProblems = createAsyncThunk(
  "problems/getProblems",
  async (payload, { rejectWithValue }) => {
    const res = await Api("/problems").then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue({ message: res.data });
    }
  }
);

const problemsSlice = createSlice({
  name: "problem",
  initialState: {
    problems: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getProblems.pending]: (state, action) => {
      state.loading = true;
    },
    [getProblems.fulfilled]: (state, action) => {
      state.problems = action.payload;
      state.loading = false;
    },
    [getProblems.rejected]: (state, action) => {
      state.error = action.payload.message;
      state.loading = false;
    },
  },
});

export default problemsSlice.reducer;
