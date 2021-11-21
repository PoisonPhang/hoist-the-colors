// Redux actions and reduces for the updating or inserting a product list

import { createSlice } from "@reduxjs/toolkit";
import { getProductsReducer } from "../products/productsSlice";

export const slice = createSlice({
    name: 'upsertProduct',
    initialState: {
        oid: "",
        name: "",
        users: [],
    },
    reducers: {
        creatProductReducer: (state, action) => {
            state.oid = action.payload;
        }
    }
})

export const { creatProductReducer } = slice.actions;

export const createProduct = (name, users) => dispatch => {
    fetch(`/create/product/${name}`, {
        body: JSON.stringify(users),
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            dispatch(getProductsReducer(res))
        })
}

export default slice.reducer;