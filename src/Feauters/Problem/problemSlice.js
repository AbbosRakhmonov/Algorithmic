import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api";

export const getProblem = createAsyncThunk(
  "problems/getProblem",
  async (id, { rejectWithValue }) => {
    const res = await Api()
      .get(`/problems/${id}`)
      .then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue({ message: res.data });
    }
  }
);

const problemSlice = createSlice({
  name: "problem",
  initialState: {
    problem: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [getProblem.pending]: (state, action) => {
      state.loading = true;
    },
    [getProblem.fulfilled]: (state, action) => {
      state.loading = false;
      state.problem = action.payload;
    },
    [getProblem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default problemSlice.reducer;
