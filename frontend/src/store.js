import { configureStore } from "@reduxjs/toolkit";
import productsListSlice from "./slicers/productList/productsListSlice";
import productDetailSlice from "./slicers/productDetail/productDetailSlice";
import cartSilce from "./slicers/cart/cartSilce";
import userLoginSlice from "./slicers/user/userLoginSlice";
import userRegisterSlice from "./slicers/user/userRegisterSlice";
import userDetailsSlice from "./slicers/user/userDetailsSlice";
import userUpdateSlice from "./slicers/user/userUpdateSlice";
import orderCreateSlice from "./slicers/order/orderCreateSlice";
import orderDetailsSlice from "./slicers/order/orderDetailsSlice";
import orderPaySlice from "./slicers/order/orderPaySlice";

const store = configureStore({
  reducer: {
    productsList: productsListSlice,
    productDetail: productDetailSlice,
    cart: cartSilce,
    userLogin: userLoginSlice,
    userRegister: userRegisterSlice,
    userDetails: userDetailsSlice,
    userUpdate: userUpdateSlice,
    orderCreate: orderCreateSlice,
    orderDetails: orderDetailsSlice,
    orderPay: orderPaySlice,
  },
});

export default store;
