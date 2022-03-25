import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api";

export const getProblems = createAsyncThunk(
  "problems/getProblems",
  async (payload, { rejectWithValue }) => {
    const res = await Api()
      .get("/problems")
      .then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      console.log(res.data);
      return rejectWithValue(res.data);
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
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default problemsSlice.reducer;
