import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  toggle: false,
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.toggle = !state.toggle;
    },
    addItem(state, action) {
      const existingItem = state.items.find(
        (p) => p.id === action.payload.item.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      } else {
        state.items.push({
          ...action.payload.item,
          total: action.payload.item.price,
          quantity: 1,
        });
      }
    },
    increaseItem(state, action) {
      const existingItem = state.items.find((p) => p.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      }
    },
    decreaseItem(state, action) {
      const existingItemIndex = state.items.findIndex(
        (p) => p.id === action.payload.id
      );
      if (existingItemIndex > -1) {
        state.items[existingItemIndex].quantity--;
      }
      if (state.items[existingItemIndex].quantity === 0) {
        state.items.splice(existingItemIndex, 1);
      }
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
