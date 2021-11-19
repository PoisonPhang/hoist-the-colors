// Redux actions and reduces for the features list

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'features',
  initialState: {
    flags: []
  },
  reducers: {
    getFlagsList: (state, action) => {
      state.flags = action.payload;
    }
  }
});

export const { getFlagsList } = slice.actions;

export const getFlags = productId => dispatch => {
  fetch (`get/flags/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(getFlagsList(res))
    })
}

export const selectFlags = state => state.flags.flags;

export default slice.reducer;