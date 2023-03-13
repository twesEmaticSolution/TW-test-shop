import {
  add_item,
  remove_item,
  save_shipping_info,
  save_payment_method,
} from "./cartSilce";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch(
    add_item({
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    })
  );

  localStorage.setItem(
    "cartItems",
    // we can only save string in local storage
    JSON.stringify(getState().cart.cartItems)
  );
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch(remove_item(id));

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => (dispatch) => {
  dispatch(save_shipping_info(data));

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch(save_payment_method(data));

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
