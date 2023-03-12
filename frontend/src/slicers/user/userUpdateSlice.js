import { createSlice } from "@reduxjs/toolkit";

export const userUpdateSlice = createSlice({
  name: "userUpdate",
  initialState: {},
  reducers: {
    update_request: (state, action) => {
      return { loading: true };
    },
    update_success: (state, action) => {
      return { loading: false, success: true, userInfo: action.payload };
    },
    update_fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { update_fail, update_request, update_success } =
  userUpdateSlice.actions;

export default userUpdateSlice.reducer;
