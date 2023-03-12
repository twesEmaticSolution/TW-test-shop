import { configureStore } from "@reduxjs/toolkit";
import productsListSlice from "./slicers/productList/productsListSlice";
import productDetailSlice from "./slicers/productDetail/productDetailSlice";
import cartSilce from "./slicers/cart/cartSilce";
import userLoginSlice from "./slicers/user/userLoginSlice";
import userRegisterSlice from "./slicers/user/userRegisterSlice";
import userDetailsSlice from "./slicers/user/userDetailsSlice";
import userUpdateSlice from "./slicers/user/userUpdateSlice";

const store = configureStore({
  reducer: {
    productsList: productsListSlice,
    productDetail: productDetailSlice,
    cart: cartSilce,
    userLogin: userLoginSlice,
    userRegister: userRegisterSlice,
    userDetails: userDetailsSlice,
    userUpdate: userUpdateSlice,
  },
});

export default store;
