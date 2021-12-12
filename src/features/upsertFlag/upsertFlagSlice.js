// Redux actions and reduces for updating or inserting a flag

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'upsertFlag',
  initialState: {
    oid: '',
    name: '',
    productId: '',
    enabled: false,
    clientToggle: false,
    releaseType: {},
  },
  reducers: {
    createFlagReducer: (state, action) => {
      state.oid = action.payload;
    },
  }
});

export const { createFlagReducer } = slice.actions;

export const createFlag = (name, productId, enabled, clientToggle, releaseType) => dispatch => {
  console.log(`/create/flag/${name}/${productId}/${enabled.toString()}/${clientToggle.toString()}`)
  console.log(releaseType)
  fetch(`/create/flag/${name}/${productId}/${enabled.toString()}/${clientToggle.toString()}`, {
    method: 'POST',
    body: JSON.stringify(releaseType)
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(createFlagReducer(res))
    })
}

export default slice.reducer;
