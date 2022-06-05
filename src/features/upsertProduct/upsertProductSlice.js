// Redux actions and reduces for the updating or inserting a product list

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'upsertProduct',
    initialState: {
        oid: "",
        name: "",
        selected_users: [],
        users: [],
    },
    reducers: {
        creatProductReducer: (state, action) => {
            state.oid = action.payload;
        },
        getUsersReducer: (state, action) => {
            state.users = action.payload;
        },
    }
})

export const { creatProductReducer, getUsersReducer } = slice.actions;

export const createProduct = (name, users) => dispatch => {
    let usersArray = users.split(',\n').map((item) => item.trim())
    fetch(`/create/product/${name}`, {
        method: 'POST',
        body: JSON.stringify(usersArray),
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            dispatch(creatProductReducer(res))
        })
}

export const getUsers = () => dispatch => {
    fetch(`/get/users/Client`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            dispatch(getUsersReducer(res))
        })
}

export default slice.reducer;
