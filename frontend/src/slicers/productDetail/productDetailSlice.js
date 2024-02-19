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
      const product = action.payload;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "view_item",
        ecommerce: {
          items: [
            {
              id: product._id,
              name: product.name,
              price: product.price,
              brand: product.brand,
              category: product.category,
              image: product.image
            },
          ],
        },
      });
      return { loading: false, product: product };
    },
    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = productDetailSlice.actions;

export default productDetailSlice.reducer;
