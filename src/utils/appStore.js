import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import your cart reducer

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here if needed
  },
});

export default appStore;