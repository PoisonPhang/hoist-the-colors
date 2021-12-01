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
      state.loggedIn = action.payload
    }
  }
})

export const { loginUser } = slice.actions;

export const login = (email, passwordHash) => dispatch => {
  fetch(`/login/${email}/${passwordHash}`)
  .then((res) => {
    console.log(`ok? -> ${res.ok}`)
    dispatch(loginUser(res.ok))
  })
}

export default slice.reducer;