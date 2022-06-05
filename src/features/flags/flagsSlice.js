// Redux actions and reduces for the features list

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'features',
  initialState: {
    flags: [],
    enabledForUser: []
  },
  reducers: {
    getFlagsReducer: (state, action) => {
      state.flags = action.payload;
    },
    setEnabledForReducer: (state, action) => {
      state.enabledForUser[action.payload.index] = action.payload.enabled
    }
  }
});

export const { getFlagsReducer, setEnabledForReducer } = slice.actions;

export const getFlags = (productId, userId, accountType) => dispatch => {
  fetch(`/get/flags/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch(getFlagsReducer(res))
      res.map((flag, index) => {
        dispatch(setEnabledFor(index, flag, userId, accountType))
      })
    })
}

export const setEnabledFor = (index, flag, userId, accountType) => dispatch => {
  if (accountType === 'Developer') {
    dispatch(setEnabledForReducer({index: index, enabled: flag.enabled}))
  } else {
    fetch(`/check/${flag.product_id}/${flag.name}/with?user=${userId}`)
      .then(res => res.json())
      .then(res => dispatch(setEnabledForReducer({index: index, enabled: res.enabled})))
  }
}

export default slice.reducer;
