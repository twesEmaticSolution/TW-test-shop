import { createSlice } from "@reduxjs/toolkit";

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    product: { reviews: [] },
  },
  reducers: {
    request: (state, action) => {
      return { loading: true, ...state };
    },
    success: (state, action) => {
      console.log("success in productDetailSlice")
      console.log({state: state})
      console.log({action: action})
      console.log({product: action.payload})
      return { loading: false, product: action.payload };
    },
    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = productDetailSlice.actions;

export default productDetailSlice.reducer;
