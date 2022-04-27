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

export const getEducationProblem = createAsyncThunk(
  "problems/getEducationProblem",
  async (id, { rejectWithValue }) => {
    const { ok, data } = await Api()
      .get(`/education/problem/${id}`)
      .then((res) => res.data);
    if (ok) {
      return data;
    } else {
      return rejectWithValue({ message: data });
    }
  }
);

const problemSlice = createSlice({
  name: "problem",
  initialState: {
    problem: null,
    attempts: [],
    lastAttempt: [],
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
    [getEducationProblem.pending]: (state, action) => {
      state.loading = true;
    },
    [getEducationProblem.fulfilled]: (state, action) => {
      state.loading = false;
      state.problem = action.payload;
    },
    [getEducationProblem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default problemSlice.reducer;
