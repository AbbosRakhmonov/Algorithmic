import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api";

export const getToken = createAsyncThunk(
  "login/getUser",
  async (data, { rejectWithValue }) => {
    const res = await Api.post("/auth/login", data).then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue({
        message: "Email or password incorrect",
      });
    }
  }
);
export const setIsLoggedIn = createAsyncThunk(
  "login/setIsLoggedIn",
  async (data, { rejectWithValue }) => {
    const res = await Api.post("/auth/login", data).then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue({
        message: "Please sign in or sign up to continue",
      });
    }
  }
);
export const addNewUser = createAsyncThunk(
  "login/addNewUser",
  async (user, { rejectWithValue }) => {
    const res = await Api.post("/auth/signup", user).then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue({
        message: res.data,
      });
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getToken.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getToken.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      localStorage.setItem("accessToken", action.payload);
    },
    [getToken.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.isLoading = false;
    },
    [addNewUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      localStorage.setItem("accessToken", action.payload);
    },
    [addNewUser.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.isLoading = false;
    },
    [setIsLoggedIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [setIsLoggedIn.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      localStorage.setItem("accessToken", action.payload);
    },
    [setIsLoggedIn.rejected]: (state, { payload }) => {
      state.error = payload.message;
      state.isLoading = false;
      localStorage.removeItem("accessToken");
    },
  },
});
export default loginSlice.reducer;
