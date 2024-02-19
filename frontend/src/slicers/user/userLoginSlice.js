import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    userInfo: userInfoFromStorage,
  },
  reducers: {
    login_request: (state, action) => {
      return { loading: true };
    },
    login_success: (state, action) => {
      return { loading: false, userInfo: action.payload };
    },
    login_fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    log_out: (state, action) => {
      return {};
    },
  },
});

export const { login_request, login_success, login_fail, log_out } =
  userLoginSlice.actions;

export default userLoginSlice.reducer;
