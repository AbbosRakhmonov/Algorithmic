import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Feauters/api";

export const getLeaders = createAsyncThunk(
  "leaderboard/getLeaders",
  async (payload, { rejectWithValue }) => {
    const res = await Api()
      .get("/users")
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
    leaders: {
      page: "leaderboard",
      data: [],
      user: null,
      headers: {
        titles: ["Nth", "", "Full Name", "Score"],
        fields: ["id", "img", "fullName", "score"],
      },
    },
    numberOfUsers: 0,
  },
  extraReducers: {},
});

export default leaderboardSlice.reducer;
