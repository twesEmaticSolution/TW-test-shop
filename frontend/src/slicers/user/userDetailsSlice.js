import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({
  name: "userDetail",
  initialState: { user: {} },
  reducers: {
    detail_request: (state, action) => {
      return { ...state, loading: true };
    },
    detail_success: (state, action) => {
      return { loading: false, user: action.payload };
    },
    detail_fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { detail_fail, detail_request, detail_success } =
  userDetailsSlice.actions;

export default userDetailsSlice.reducer;
