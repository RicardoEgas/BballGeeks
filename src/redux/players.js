import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const perPage = 100; // Set the number of results per page
const maxRetries = 5; // Increase the maximum number of retries

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

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
      retries += 1;

      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => setTimeout(resolve, 30000));
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
