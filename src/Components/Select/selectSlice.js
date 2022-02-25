import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../Feauters/api";

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

const selectSlice = createSlice({
  name: "compilers",
  initialState: {
    compilers: [],
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
  },
});

export default selectSlice.reducer;
