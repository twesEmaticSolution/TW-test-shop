import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // cartItems: { cartItems: cartItemsFromStorage },
    cartItems: cartItemsFromStorage,
  },
  reducers: {
    add_item(state, action) {
      // check if the item already existed in the cart
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        // if existed, update product number and leave other products the same
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    },
    remove_item(state, action) {
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    },
  },
});

export const { add_item, remove_item } = cartSlice.actions;

export default cartSlice.reducer;
