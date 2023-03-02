import { request, success, fail } from "./productDetailSlice";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const listProductDetail = createAsyncThunk(
  "productDetail/listProductDetail",
  async (id, { dispatch }) => {
    try {
      dispatch(request());
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(success(data));
    } catch (err) {
      const error =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      dispatch(fail(error));
    }
  }
);

// export const listProductDetail = (id) => async (dispatch) => {
//   try {
//     dispatch(request());
//     const { data } = await axios.get(`/api/products/${id}`);
//     dispatch(success(data));
//   } catch (err) {
//     const error =
//       err.response && err.response.data.message
//         ? err.response.data.message
//         : err.message;
//     dispatch(fail(error));
//   }
// };
