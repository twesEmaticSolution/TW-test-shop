import { add_item, remove_item } from "./cartSilce";
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
