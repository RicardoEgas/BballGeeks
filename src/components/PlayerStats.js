import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

// Function to remove punctuation and brackets from JSON string
const removePunctuation = (jsonString) => jsonString.replace(/[{},;()'"/]/g, '');

function PlayerStats({ selectedPlayerId }) {
  const { season } = useParams();
  const [playerStats, setPlayerStats] = useState(null);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      if (selectedPlayerId !== null) {
        try {
          const response = await axios.get('https://www.balldontlie.io/api/v1/season_averages', {
            params: {
              season,
              player_ids: [selectedPlayerId],
            },
          });

          if (response.data.data.length > 0) {
            const strippedStats = removePunctuation(JSON.stringify(response.data.data[0], null, 2));
            setPlayerStats(strippedStats);
          } else {
            setPlayerStats(null);
          }
        } catch (error) {
          setPlayerStats(null);
        }
      }
    };

    fetchPlayerStats();
  }, [selectedPlayerId, season]);

  return (
    <div className="playerStats">
      <h2> Player Stats </h2>
      {playerStats !== null ? (
        <pre>{playerStats}</pre>
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
