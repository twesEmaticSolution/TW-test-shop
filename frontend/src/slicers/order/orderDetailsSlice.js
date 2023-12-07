import { createSlice } from "@reduxjs/toolkit";

export const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: { loading: true, orderItems: [], shippingAddress: {} },
  reducers: {
    order_details_request(state, action) {
      return { loading: true };
    },
    order_details_success(state, action) {
      return {
        loading: false,
        order: action.payload,
      };
    },
    order_details_fail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const {
  order_details_fail,
  order_details_request,
  order_details_success,
} = orderDetailsSlice.actions;

export default orderDetailsSlice.reducer;
