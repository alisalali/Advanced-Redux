import { configureStore } from "@reduxjs/toolkit";

import uiAction from "../store/ui";
const store = configureStore({
  reducer: {
    ui: uiAction,
  },
});

export default store;
