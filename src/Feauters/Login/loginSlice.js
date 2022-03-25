import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api";

export const getToken = createAsyncThunk(
  "login/getUser",
  async (data, { rejectWithValue }) => {
    const res = await Api()
      .post("/auth/login", data)
      .then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue("Email or password incorrect");
    }
  }
);
export const getUserImage = createAsyncThunk(
  "login/getUserImage",
  async (id, { rejectWithValue }) => {
    return await Api()
      .get("/files/avatar/" + id, {
        responseType: "arraybuffer",
      })
      .then((res) => {
        let blob = new Blob([res.data], {
          type: res.headers["content-type"],
        });
        return URL.createObjectURL(blob);
      });
  }
);
export const addNewUser = createAsyncThunk(
  "login/addNewUser",
  async (user, { rejectWithValue }) => {
    const res = await Api()
      .post("/auth/signup", user)
      .then((res) => res.data);
    if (res.ok) {
      return res.data;
    } else {
      return rejectWithValue(res.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn;
      state.user = payload.user;
    },
  },
  extraReducers: {
    [getToken.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getToken.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      localStorage.setItem("accessToken", action.payload);
    },
    [getToken.rejected]: (state, { payload }) => {
      state.error = payload;
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
      state.error = payload;
      state.isLoading = false;
    },
    [getUserImage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user.image = action.payload;
    },
    [getUserImage.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});
export default loginSlice.reducer;
export const { setIsLoggedIn } = loginSlice.actions;
