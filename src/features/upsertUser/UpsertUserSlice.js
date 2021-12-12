// Redux actions and reducers for updating or inserting a user

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'upsertUser',
  initialState: {
    oid: '',
    name: '',
    email: '',
    password: '',
    accountType: '',
  },
  reducers: {
    createUserReducer: (state, action) => {
      state.oid = action.payload;
    },
  }
})

export const { createUserReducer } = slice.actions;

export const createUser = (name, email, password, accountType) => dispatch => {
  fetch(`/create/user/${name}/${email}/${password}/${accountType}`, {
    method:'POST',
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(createUserReducer(res))
    })
}

export default slice.reducer;
