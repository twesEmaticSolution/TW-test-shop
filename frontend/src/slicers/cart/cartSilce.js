import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // cartItems: { cartItems: cartItemsFromStorage },
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  reducers: {
    add_item(state, action) {
      console.log({add_item_state: state})
      console.log({add_item_action: action})
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
      console.log({remove_item_state: state})
      console.log({remove_item_action: action})
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    },
    save_shipping_info(state, action) {
      return {
        ...state,
        shippingAddress: action.payload,
      };
    },
    save_payment_method(state, action) {
      return {
        ...state,
        paymentMethod: action.payload,
      };
    },
  },
});

export const {
  add_item,
  remove_item,
  save_shipping_info,
  save_payment_method,
} = cartSlice.actions;

export default cartSlice.reducer;
