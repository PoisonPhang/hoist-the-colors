// Redux actions and reducers for logging in users

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'login',
  initialState: {
    user: {},
    loggedIn: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.loggedIn = action.payload.success
    }
  }
})

export const { loginUser } = slice.actions;

export const login = (email, passwordHash) => dispatch => {
  fetch(`/login/${email}/${passwordHash}`)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    dispatch(loginUser(res))
  })
}

export default slice.reducer;