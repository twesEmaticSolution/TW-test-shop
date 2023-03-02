import { createSlice } from "@reduxjs/toolkit";

export const productsListSlice = createSlice({
  name: "productsList",
  initialState: {
    products: [],
  },
  reducers: {
    request: (state, action) => {
      return { loading: true, products: [] };
    },
    success: (state, action) => {
      return { loading: false, products: action.payload };
    },
    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = productsListSlice.actions;

export default productsListSlice.reducer;
