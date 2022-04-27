import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../api";

export const getEducationThemes = createAsyncThunk(
  "education/getEducationThemes",
  async (payload, { rejectWithValue }) => {
    const { data, ok } = await Api()
      .get("/education")
      .then((res) => res.data);
    if (ok) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  }
);

export const getThemeProblems = createAsyncThunk(
  "education/getThemeProblems",
  async (theme, { rejectWithValue }) => {
    const { data, ok } = await Api()
      .get(`/education/${theme}`)
      .then((res) => res.data);
    if (ok) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  }
);

const educationSlice = createSlice({
  name: "education",
  initialState: {
    themes: [],
    problems: [],
    attempts: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getEducationThemes.pending]: (state, action) => {
      state.loading = true;
    },
    [getEducationThemes.fulfilled]: (state, action) => {
      state.themes = action.payload;
      state.loading = false;
    },
    [getEducationThemes.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getThemeProblems.pending]: (state, action) => {
      state.loading = true;
    },
    [getThemeProblems.fulfilled]: (state, action) => {
      state.problems = action.payload;
      state.loading = false;
    },
    [getThemeProblems.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default educationSlice.reducer;
