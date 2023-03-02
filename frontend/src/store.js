import { configureStore } from "@reduxjs/toolkit";
import productsListSlice from "./slicers/productList/productsListSlice";
import productDetailSlice from "./slicers/productDetail/productDetailSlice";
import cartSilce from "./slicers/cart/cartSilce";

const store = configureStore({
  reducer: {
    productsList: productsListSlice,
    productDetail: productDetailSlice,
    cart: cartSilce,
  },
});

export default store;
