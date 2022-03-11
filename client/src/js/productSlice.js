import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getproducts = createAsyncThunk("product/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/product/");
    return result;
  } catch (error) {}
});
export const addprod = createAsyncThunk("product/add", async (product) => {
  try {
    let result = axios.post("http://localhost:5000/product/add", product);
    return result;
  } catch (error) {}
});
export const deleteprod = createAsyncThunk("product/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/product/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const updateprod = createAsyncThunk(
  "product/update",
  async ({ id, product }) => {
    try {
      let result = axios.put(`http://localhost:5000/product/${id}`, product);
      console.log(product);
      console.log(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addrating = createAsyncThunk(
  "product/update",
  async ({ id, review }) => {
    try {
      let result = axios.put(
        `http://localhost:5000/product/rate/${id}`,
        review
      );
      console.log(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleterating = createAsyncThunk(
  "product/delete",
  async ({id}) => {
    try {
      let result = axios.delete(
        `http://localhost:5000/product/rate/${id}`
      );
      console.log(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  products: null,
  status: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getproducts.pending]: (state) => {
      state.status = "pending";
    },
    [getproducts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.products = action.payload.data.products;
    },
    [getproducts.rejected]: (state) => {
      state.status = "rejected";
    },
    [addprod.pending]: (state) => {
      state.status = "pending";
    },
    [addprod.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [addprod.rejected]: (state) => {
      state.status = "rejected";
    },
    [deleteprod.pending]: (state) => {
      state.status = "pending";
    },
    [deleteprod.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [deleteprod.rejected]: (state) => {
      state.status = "rejected";
    },
    [updateprod.pending]: (state) => {
      state.status = "pending";
    },
    [updateprod.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [updateprod.rejected]: (state) => {
      state.status = "rejected";
    },
    [addrating.pending]: (state) => {
      state.status = "pending";
    },
    [addrating.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [addrating.rejected]: (state) => {
      state.status = "rejected";
    },
    [deleterating.pending]: (state) => {
      state.status = "pending";
    },
    [deleterating.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [deleterating.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer;
