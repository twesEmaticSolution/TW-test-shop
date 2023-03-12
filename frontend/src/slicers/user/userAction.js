import {
  login_fail,
  login_request,
  login_success,
  log_out,
} from "./userLoginSlice.js";

import {
  register_fail,
  register_request,
  register_success,
} from "./userRegisterSlice.js";

import {
  detail_fail,
  detail_request,
  detail_success,
} from "./userDetailsSlice.js";

import {
  update_fail,
  update_request,
  update_success,
} from "./userUpdateSlice.js";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(login_request());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch(login_success(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(login_fail(error));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(log_out());
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(register_request());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch(register_success(data));
    dispatch(login_success(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(register_fail(error));
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(detail_request());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch(detail_success(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(detail_fail(error));
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(update_request());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put("/api/users/profile", user, config);

    dispatch(update_success(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(update_fail(error));
  }
};
