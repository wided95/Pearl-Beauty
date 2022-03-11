import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import feedbackSlice from "./feedbackSlice";
import orderSlice from "./orderSlice";
import productSlice from "./productSlice";
import reviewSlice from "./reviewSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
    order: orderSlice,
    feedback:feedbackSlice,
    review:reviewSlice,
  },
});
