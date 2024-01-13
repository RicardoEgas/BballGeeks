import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerStats from '../components/PlayerStats';

describe('PlayerStats component', () => {
  it('should render "No player stats available" message when playerStats is null', () => {
    render(<PlayerStats selectedPlayerId={1} playerStats={null} />);
    const noStatsMessage = screen.getByText(/No player stats available for the selected player/i);
    expect(noStatsMessage).toBeInTheDocument();
    expect(noStatsMessage).toMatchSnapshot();
  });
});
