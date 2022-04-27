import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api";

export const getUser = createAsyncThunk(
  "profile/getUser",
  async (userId, { rejectWithValue }) => {
    const { data, ok } = await Api()
      .get("/users/" + userId)
      .then((res) => res.data);
    if (ok) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default profileSlice.reducer;
