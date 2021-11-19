// Redux actions and reduces for the products list

import { createSlice } from "@reduxjs/toolkit";

const GET_PRODUCTS_LIST_ACTION = 'service/getProductsList';

const testProducts = [
  { oid: '01', name: 'product01', users: ['02'] },
  { oid: '02', name: 'product02', users: ['02', '04'] },
  { oid: '03', name: 'product03', users: ['02', '03'] },
  { oid: '04', name: 'product04', users: ['01', '02'] },
  { oid: '05', name: 'product05', users: ['01', '02', '03'] },
  { oid: '06', name: 'product06', users: ['01', '02', '04'] },
]

export const slice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {
    getProductsList: (state, action) => {
      state.products = action.data
    }
  }
})

export const { getProductsList } = slice.actions;

export const getProducts = email => dispatch => {
  console.log('fetching thing')
  fetch(`/get/products/${email}`)
    .then((res) => {
      console.log('fetched thing')
      return res.json();
    })
    .then((res) => {
      dispatch(getProductsList());
    })
}

export const selectProducts = state => state.products.products;

export default slice.reducer;