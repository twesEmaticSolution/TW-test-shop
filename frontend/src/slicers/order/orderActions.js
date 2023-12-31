import {
  order_create_fail,
  order_create_request,
  order_create_success,
} from "./orderCreateSlice";

import {
  order_details_fail,
  order_details_success,
  order_details_request,
} from "./orderDetailsSlice";

import {
  order_pay_fail,
  order_pay_request,
  order_pay_success,
  order_pay_reset,
} from "./orderPaySlice";
import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(order_create_request());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/orders", order, config);

    dispatch(order_create_success(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(order_create_fail(error));
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(order_details_request());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch(order_details_success(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(order_details_fail(error));
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch(order_pay_request());

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );

      dispatch(order_pay_success(data));
    } catch (err) {
      const error =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      dispatch(order_pay_fail(error));
    }
  };
