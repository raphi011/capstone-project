import { PropTypes } from 'react';


export const team = PropTypes.shape({
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
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
  club: PropTypes.string,
  registrations: PropTypes.number,
  size: PropTypes.size,
  teams: PropTypes.arrayOf(team),
  description: PropTypes.string,
  location,
});
