import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  toggle: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});
export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
