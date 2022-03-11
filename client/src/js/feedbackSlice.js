import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postfeedback = createAsyncThunk(
  "feedback/add",
  async (feedback) => {
    try {
      let result = axios.post("http://localhost:5000/feedback/add", feedback);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getfeedback = createAsyncThunk("feedback/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/feedback/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  feedback: null,
  status: null,
};
export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: {
    [postfeedback.pending]: (state) => {
      state.status = "pending";
    },
    [postfeedback.fulfilled]: (state, action) => {
      state.status = "fulfilled";
    },
    [postfeedback.rejected]: (state) => {
      state.status = "rejected";
    },
    [getfeedback.pending]: (state) => {
      state.status = "pending";
    },
    [getfeedback.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.feedback = action.payload.data.feedbacks;
    },
    [getfeedback.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});
export const {} = feedbackSlice.actions;
export default feedbackSlice.reducer;
