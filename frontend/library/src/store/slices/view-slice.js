import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: null,
  loading: false,
  error: false,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    loadCurrentReq: (state) => ({ ...state, loading: true, error: false }),
    loadCurrentErr: (state) => ({ ...state, loading: false, error: true }),
    loadCurrentOk: (state, action) => {
      const current = action.payload;
      return {
        ...state,
        loading: false,
        current,
      };
    },
  },
});

export const {
  loadCurrentReq,
  loadCurrentErr,
  loadCurrentOk,
} = viewSlice.actions;

export default viewSlice.reducer;
