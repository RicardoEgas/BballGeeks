// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './players';

const store = configureStore({
  reducer: {
    players: playersReducer,
  },
});

export default store;
