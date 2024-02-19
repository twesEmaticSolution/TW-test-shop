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
      console.log("login_request");
      console.log({state: state});
      console.log({action: action});
      return { loading: true };
    },
    login_success: (state, action) => {
      console.log("login_success");
      console.log({state: state});
      console.log({action: action});
      return { loading: false, userInfo: action.payload };
    },
    login_fail: (state, action) => {
      console.log("login_fail");
      console.log({state: state});
      console.log({action: action});
      return { loading: false, error: action.payload };
    },
    log_out: (state, action) => {
      console.log("log_out");
      console.log({state: state});
      console.log({action: action});
      return {};
    },
  },
});

export const { login_request, login_success, login_fail, log_out } =
  userLoginSlice.actions;

export default userLoginSlice.reducer;
