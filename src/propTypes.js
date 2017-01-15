import { PropTypes } from 'react';

export const player = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export const team = PropTypes.shape({
  player1: player,
  player2: player,
  points: PropTypes.number,
  rank: PropTypes.number,
});

export const location = PropTypes.shape({
  longitude: PropTypes.number,
  latitude: PropTypes.number,
});

export const club = PropTypes.shape({
  name: PropTypes.string,
  location,
});

export const tournament = PropTypes.shape({
  id: PropTypes.number,
  league: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
  registrations: PropTypes.number,
  size: PropTypes.size,
  teams: PropTypes.arrayOf(team),
  description: PropTypes.string,
  location,
  club,
});
