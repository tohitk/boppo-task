import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = item.quantity + action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },

    incrementItem(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decrementItem(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity--;
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state, action) {
      return [];
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
