import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api";

export const getCompilers = createAsyncThunk(
  "compilers/getCompilers",
  async (arg, { rejectWithValue }) => {
    const res = await Api()
      .get("/compilers")
      .then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue({ message: res.data });
    }
  }
);

export const getCompiler = createAsyncThunk(
  "compilers/getCompiler",
  async (language, { rejectWithValue }) => {
    const res = await Api()
      .get(`/compilers/${language}`)
      .then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue({ message: res.data });
    }
  }
);

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
    compilers: null,
    compiler: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [getCompilers.pending]: (state, action) => {
      state.loading = true;
    },
    [getCompilers.fulfilled]: (state, action) => {
      state.loading = false;
      state.compilers = action.payload;
    },
    [getCompilers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getCompiler.pending]: (state, action) => {
      state.loading = true;
    },
    [getCompiler.fulfilled]: (state, action) => {
      state.loading = false;
      state.compiler = action.payload;
    },
    [getCompiler.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
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
