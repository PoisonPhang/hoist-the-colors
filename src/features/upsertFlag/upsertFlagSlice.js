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

}
