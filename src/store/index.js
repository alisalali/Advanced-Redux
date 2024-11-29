import { configureStore } from "@reduxjs/toolkit";

import cartAction from "./cart";

const store = configureStore({
  reducer: {
    cart: cartAction,
  },
});

export default store;
