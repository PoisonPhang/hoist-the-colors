// Redux actions and reducers for logging in users

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'login',
  initialState: {
    accountType: '',
    loggedIn: false,
    oid: '',
    name: '',
    email: '',
  },
  reducers: {
    loginUser: (state, action) => {
      state.accountType = action.payload.accountType
      state.loggedIn = action.payload.loggedIn
      state.oid = action.payload.oid
      state.name = action.payload.name
      state.email = action.payload.email
    }
  }
})

export const { loginUser } = slice.actions;

export const login = (email, passwordHash) => dispatch => {
  fetch(`/login/${email}/${passwordHash}`)
  .then((res) => {
    if (res.ok) {
      res.json().then((res) => {
        dispatch(loginUser({ accountType: res.account_type, loggedIn: true, oid: res.oid, name: res.name, email: res.email }))
      })
    } else {
      dispatch({ accountType: '', loggedIn: false, oid: '', name: '', email: '' })
    }
  })
}

export default slice.reducer;
