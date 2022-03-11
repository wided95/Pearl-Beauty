import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postreview = createAsyncThunk(
  "review/add",
  async (review) => {
    try {
      let result = axios.post("http://localhost:5000/review/add", review);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getreview = createAsyncThunk("review/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/review/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  review: null,
  status: null,
};
export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: {
    [postreview.pending]: (state) => {
      state.status = "pending";
    },
    [postreview.fulfilled]: (state, action) => {
      state.status = "fulfilled";
    },
    [postreview.rejected]: (state) => {
      state.status = "rejected";
    },
    [getreview.pending]: (state) => {
      state.status = "pending";
    },
    [getreview.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.review = action.payload.data.review;
    },
    [getreview.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});
export const {} = reviewSlice.actions;
export default reviewSlice.reducer;
