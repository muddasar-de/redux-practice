import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import incrementSlice from "./incrementSlice";
import productReducer from "./productSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    increament: incrementSlice,
    products: productReducer,
  },
});

export default store;
