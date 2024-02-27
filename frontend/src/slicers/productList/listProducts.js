import { createAsyncThunk } from "@reduxjs/toolkit";
import { request, success, fail } from "./productsListSlice";
import axios from "axios";

export const listProducts = createAsyncThunk(
  "productList/listProducts",
  async (_, { dispatch }) => {
    try {
      dispatch(request());
      const { data } = await axios.get("/api/products");
      console.log({data: data});
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

// import { request, success, fail } from "./productsListSlice";
// import axios from "axios";

// export const listProducts = () => async (dispatch) => {
//   try {
//     dispatch(request());
//     const { data } = await axios.get("/api/products");
//     dispatch(success(data));
//   } catch (err) {
//     const error =
//       err.response && err.response.data.message
//         ? err.response.data.message
//         : err.message;
//     dispatch(fail(error));
//   }
// };
