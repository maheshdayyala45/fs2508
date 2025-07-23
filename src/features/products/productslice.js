import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productlist: [],
  isLoading: false,
  error: null,
};

const productslice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setisloading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setproducts: (state, action) => {
      state.productlist = action.payload;
      state.isLoading = false;
    },
    seterrorr: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setisloading, setproducts, seterrorr } = productslice.actions;

export default productslice.reduc