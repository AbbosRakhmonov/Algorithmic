import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api";

export const getHomeData = createAsyncThunk(
  "home/getHomeData",
  async (data, { rejectWithValue }) => {
    const res = await Api.get("/home/stats").then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue({ message: res.data });
    }
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [getHomeData.pending]: (state) => {
      state.loading = true;
    },
    [getHomeData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getHomeData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default homeSlice.reducer;
