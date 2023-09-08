import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import {
  fetchPlayers,
  selectPlayers,
  selectPlayersStatus,
  selectPlayersError,
} from '../redux/players';
import PlayerStats from './PlayerStats';

function PlayerSearch() {
  const dispatch = useDispatch();
  const status = useSelector(selectPlayersStatus);
  const players = useSelector(selectPlayers);
  const error = useSelector(selectPlayersError);

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    // Fetch player data using Redux thunk
    dispatch(fetchPlayers());
  }, [dispatch]);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : players.filter(
        (player) => player.first_name.toLowerCase().includes(inputValue)
            || player.last_name.toLowerCase().includes(inputValue),
      );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => `${suggestion.first_name} ${suggestion.last_name}`;

  const renderSuggestion = (suggestion) => (
    <div className="suggestions-list-item">{`${suggestion.first_name} ${suggestion.last_name}`}</div>
  );

  const handleSuggestionSelected = (_, { suggestionValue }) => {
    const selected = players.find(
      (player) => `${player.first_name} ${player.last_name}` === suggestionValue,
    );
    setSelectedPlayer(selected.id);
  };

  if (status !== 'succeeded') {
    return (
      <div>
        <h1>Player Search</h1>
        {status === 'loading' && (
          <p>Loading data, please wait a few seconds...</p>
        )}
        {status === 'failed' && (
          <p>
            Error:
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Player Search</h1>
      <p>You can search a player now! 😃 </p>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          className: 'autosuggest-input',
          placeholder: 'Search for a player',
          value: searchTerm,
          onChange: (_, { newValue }) => setSearchTerm(newValue),
        }}
        onSuggestionSelected={handleSuggestionSelected}
      />
      {selectedPlayer && <PlayerStats selectedPlayerId={selectedPlayer} />}
    </div>
  );
}

export default PlayerSearch;
