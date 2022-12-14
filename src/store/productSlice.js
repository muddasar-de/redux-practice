import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts: (state, actions) => {
    //   state.data = actions.payload;
    // },
    // setStatus: (state, actions) => {
    //   state.status = actions.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, actions) => {
        state.status = STATUSES.LOADING;
      })

      .addCase(fetchProducts.fulfilled, (state, actions) => {
        state.data = actions.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, actions) => {
        state.status = STATUSES.ERROR;
      });
  },
});
// export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// MIDDLEWARE: THUNK | to make API call async

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

// export const fetchProducts = () => {
//   return async (dispatch, getState) => {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProducts(data));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// };
