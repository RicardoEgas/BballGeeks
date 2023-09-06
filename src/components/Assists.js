import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPlayers, selectPlayers, selectPlayersStatus, selectPlayersError,
} from '../redux/players';
import PlayerStats from './PlayerStats';

function Assists() {
  const dispatch = useDispatch();
  const players = useSelector(selectPlayers);
  const status = useSelector(selectPlayersStatus);
  const error = useSelector(selectPlayersError);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    // Fetch player data using Redux thunk
    dispatch(fetchPlayers());
  }, [dispatch]);

  const filteredPlayers = players.filter(
    (player) => player.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      || player.last_name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h1>Player Search</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && (
      <p>
        Error:
        {error}
      </p>
      )}
      <input
        type="text"
        placeholder="Search for a player"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        onChange={(e) => setSelectedPlayer(e.target.value)}
        value={selectedPlayer || ''}
      >
        <option value="">Select a player</option>
        {filteredPlayers.map((player) => (
          <option key={player.id} value={player.id}>
            {player.first_name}
            {' '}
            {player.last_name}
          </option>
        ))}
      </select>
      {selectedPlayer && <PlayerStats selectedPlayerId={selectedPlayer} />}
    </div>
  );
}

export default Assists;
