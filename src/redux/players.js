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
  const allPlayers = [];
  const retries = 0;
  const fetchPage = async (page) => {
    try {
      const response = await axios.get('https://www.balldontlie.io/api/v1/players', {
        params: {
          page,
          per_page: perPage,
        },
      });

      if (response.data.data.length === 0) {
        return; // No more players to fetch
      }

      allPlayers.push(...response.data.data);
      await fetchPage(page + 1); // Recursively fetch the next page
    } catch (error) {
      if (retries < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 30000));
        await fetchPage(page); // Retry the current page
      } else {
        throw new Error('Max retries reached');
      }
    }
  };

  await fetchPage(1); // Start fetching from the first page

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
