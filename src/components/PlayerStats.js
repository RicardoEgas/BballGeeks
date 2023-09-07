// PlayerStats.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function PlayerStats({ selectedPlayerId }) {
  const [playerStats, setPlayerStats] = useState(null);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      if (selectedPlayerId !== null) {
        try {
          const response = await axios.get('https://www.balldontlie.io/api/v1/season_averages', {
            params: {
              season: '2018',
              player_ids: [selectedPlayerId],
            },
          });

          if (response.data.data.length > 0) {
            setPlayerStats(response.data.data[0]);
          } else {
            setPlayerStats(null);
          }
        } catch (error) {
          setPlayerStats(null);
        }
      }
    };

    fetchPlayerStats();
  }, [selectedPlayerId]);

  return (
    <div>
      <h2> Player Stats </h2>
      {playerStats !== null ? (
        <pre>{JSON.stringify(playerStats, null, 2)}</pre>
      ) : (
        <p>No player stats available for the selected player.</p>
      )}
    </div>
  );
}

PlayerStats.propTypes = {
  selectedPlayerId: PropTypes.number.isRequired,
};

export default PlayerStats;
