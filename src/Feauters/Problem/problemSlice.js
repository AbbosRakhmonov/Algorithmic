import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../api";

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

export const getEducationProblem = createAsyncThunk(
  "problems/getEducationProblem",
  async (id, { rejectWithValue }) => {
    const { ok, data } = await Api()
      .get(`/education/problem/${id}`)
      .then((res) => res.data);
    if (ok) {
      return data;
    } else {
      return rejectWithValue({ message: data });
    }
  }
);

export const submitAnswer = createAsyncThunk(
  "problems/submitAnswer",
  async (payload, { rejectWithValue }) => {
    const { ok, data } = await Api()
      .post("/attempts", payload)
      .then((res) => res.data);
    if (ok) {
      const res = await Api()
        .get(`/attempts/check/${data}`)
        .then(() =>
          Api()
            .get(`/attempts/status/${data}`)
            .then((res) => res.data)
        );
      return res;
    } else {
      return rejectWithValue({ message: data });
    }
  }
);

const problemSlice = createSlice({
  name: "problem",
  initialState: {
    problem: null,
    attempts: [],
    lastAttempt: [],
    loading: false,
    problemSubmitted: false,
    error: null,
  },
  reducers: {
    setLastSubmit: (state, { payload }) => {
      state.lastAttempt = [{ ...payload }];
      state.attempts.push({ ...payload });
    },
  },
  extraReducers: {
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
    [getEducationProblem.pending]: (state, action) => {
      state.loading = true;
    },
    [getEducationProblem.fulfilled]: (state, action) => {
      state.loading = false;
      state.problem = action.payload;
    },
    [getEducationProblem.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [submitAnswer.pending]: (state) => {
      state.problemSubmitted = true;
    },
    [submitAnswer.fulfilled]: (state, { payload }) => {
      state.problemSubmitted = false;
      state.lastAttempt[0].status = payload;
    },
  },
});

export const { setLastSubmit } = problemSlice.actions;
export default problemSlice.reducer;
