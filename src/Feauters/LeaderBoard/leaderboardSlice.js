import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Feauters/api";

export const getLeaders = createAsyncThunk(
  "leaderboard/getLeaders",
  async (id, { rejectWithValue }) => {
    const res = await Api()
      .get("/users/page/" + id)
      .then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue(res.data);
    }
  }
);

export const filterLeaders = createAsyncThunk(
  "leaderboard/filterLeaders",
  async (str, { rejectWithValue }) => {
    const res = await Api()
      .get("/users/filter/" + str)
      .then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue(res.data);
    }
  }
);

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState: {
    isLoading: false,
    error: null,
    leaders: [],
    currentUser: null,
    numberOfUsers: 0,
  },
  extraReducers: {
    [getLeaders.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getLeaders.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.leaders = payload.users;
      state.numberOfUsers = payload.count;
    },
    [getLeaders.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default leaderboardSlice.reducer;
