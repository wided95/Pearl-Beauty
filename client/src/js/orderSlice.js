import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orderss: null,
  orderD: {
    items: [],
  },
  order: null,
};

export const postorder = createAsyncThunk("order/add", async (order) => {
  try {
    let result = axios.post("http://localhost:5000/order/", order);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const getorders = createAsyncThunk("order/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/order/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const getorderbyid = createAsyncThunk("orderbyid/get", async (id) => {
  try {
    let result = axios.get(`http://localhost:5000/order/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deleteorder = createAsyncThunk("order/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/order/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [postorder.pending]: (state) => {
      state.status = "pending";
    },
    [postorder.fulfilled]: (state, action) => {
      state.status = "fulfilled";
    },
    [postorder.rejected]: (state) => {
      state.status = "rejected";
    },
    [getorders.pending]: (state) => {
      state.status = "pending";
    },
    [getorders.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.orderss = action.payload.data.orders;
    },
    [getorders.rejected]: (state) => {
      state.status = "rejected";
    },
    [getorderbyid.pending]: (state) => {
      state.status = "pending";
    },
    [getorderbyid.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.order = action.payload.data.order;
    },
    [getorderbyid.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = orderSlice.actions;

export default orderSlice.reducer;
