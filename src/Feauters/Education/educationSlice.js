import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../api";

const educationSlice = createSlice({
  name: "education",
  initialState: {
    themes: [],
    problems: [],
    attempts: [
      {
        id: 1,
        status: "Accepted",
        language: "JavaScript",
        date: "2020-05-20",
      },
    ],
    loading: false,
    error: null,
  },
});

export default educationSlice.reducer;
