import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
};

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ productId, qty }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/product/${productId}`
      );
      console.log(productId, qty);
      return { data, qty };
    } catch (error) {
      console.log(error);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    },
    removefromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (el) => el._id != action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    saveShipping: (state, action) => {
      localStorage.setItem("shippinginfo", JSON.stringify(action.payload));
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
  extraReducers: {
    [addToCart.pending]: (state) => {
      state.status = "pending";
    },
    [addToCart.fulfilled]: (state, action) => {
      let item = action.payload.data.product;
      console.log(action.payload.qty);
      state.status = "fulfilled";
      state.cartItems = [
        ...state.cartItems,
        { ...item, qty: action.payload.qty },
      ];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    [addToCart.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllProducts, removefromCart, saveShipping, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
