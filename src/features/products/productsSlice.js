// Redux actions and reduces for the products list

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    selectedProduct: '',
    productName: '',
  },
  reducers: {
    getProductsReducer: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload.oid;
      state.productName = action.payload.name;
    }
  }
})

export const { getProductsReducer, setSelectedProduct } = slice.actions;

export const getProducts = email => dispatch => {
  fetch(`/get/products/${email}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(getProductsReducer(res));
    })
}

export const setSelected = (oid, name) => dispatch => {
  dispatch(setSelectedProduct({ oid: oid, name: name }))
}

export default slice.reducer;
