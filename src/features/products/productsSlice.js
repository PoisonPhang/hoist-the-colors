// Redux actions and reduces for the products list

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {
    getProductsReducer: (state, action) => {
      state.products = action.payload;
    }
  }
})

export const { getProductsReducer } = slice.actions;

export const getProducts = email => dispatch => {
  fetch(`/get/products/${email}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(getProductsReducer(res));
    })
}

export default slice.reducer;