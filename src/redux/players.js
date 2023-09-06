// src/redux/players.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const perPage = 100; // Set the number of results per page
const maxRetries = 5; // Increase the maximum number of retries
let retryDelay = 1000; // Initial delay in milliseconds (1 second)

// Define an initial state
const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

// Define an async thunk to fetch player data with pagination and retry logic
export const fetchPlayers = createAsyncThunk('players/fetchPlayers', async () => {
  let allPlayers = [];
  let page = 1;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const response = await axios.get('https://www.balldontlie.io/api/v1/players', {
        params: {
          page,
          per_page: perPage,
        },
      });

      if (response.data.data.length === 0) {
        break; // No more players to fetch
      }

      allPlayers = [...allPlayers, ...response.data.data];
      page += 1; // Increment page for the next request
    } catch (error) {
      console.error('Request failed:', error);
      retries += 1;

      // Use exponential backoff with a maximum delay of 30 seconds (30000 milliseconds)
      retryDelay = Math.min(retryDelay * 2, 30000);
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }

  if (retries === maxRetries) {
    throw new Error('Max retries reached');
  }

  return allPlayers;
});

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchPlayers.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        data: action.payload,
      }))
      .addCase(fetchPlayers.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const selectPlayers = (state) => state.players.data;
export const selectPlayersStatus = (state) => state.players.status;
export const selectPlayersError = (state) => state.players.error;

export default playersSlice.reducer;
