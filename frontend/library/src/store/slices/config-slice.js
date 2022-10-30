import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collapsed: true,
  viewDeep: 2,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    expandTree: (state) => ({
      ...state,
      collapsed: false,
    }),
    collapseTree: (state) => ({
      ...state,
      collapsed: true,
    }),
  },
});

export const {
  expandTree,
  collapseTree,
} = configSlice.actions;

export default configSlice.reducer;
