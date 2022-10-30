import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  tree: null,
  loading: false,
  error: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    loadDataReq: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    loadDataErr: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),
    loadDataOk: (state, action) => {
      const { data, tree } = action.payload;
      return {
        ...state,
        loading: false,
        data,
        tree,
      };
    },
  },
});

export const {
  loadDataErr,
  loadDataReq,
  loadDataOk,
} = dataSlice.actions;

export default dataSlice.reducer;
