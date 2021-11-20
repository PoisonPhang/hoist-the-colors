// Redux actions and reduces for the features list

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'features',
  initialState: {
    flags: []
  },
  reducers: {
    getFlagsReducer: (state, action) => {
      state.flags = action.payload;
    }
  }
});

export const { getFlagsReducer } = slice.actions;

export const getFlags = productId => dispatch => {
  fetch(`/get/flags/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(getFlagsReducer(res))
    })
}

export default slice.reducer;