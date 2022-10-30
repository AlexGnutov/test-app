import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './slices/data-slice';
import configReducer from './slices/config-slice';
import viewReducer from './slices/view-slice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    data: dataReducer,
    config: configReducer,
    view: viewReducer,
  },
});
