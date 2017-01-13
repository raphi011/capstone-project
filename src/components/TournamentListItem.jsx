import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import ListItem from 'grommet/components/ListItem';
import Box from 'grommet/components/Box';

import LeagueIcon from './LeagueIcon';

const TournamentListItem = ({ onSelect, type, league, club, registrations, date, size }) => (
  <ListItem
    onClick={(e) => { if (e.target.tagName.toLowerCase() !== 'a') onSelect(); } }
    justify="between"
    separator="horizontal"
    >
    <Box direction="row" >
      <LeagueIcon league={league} />
      <span style={{ margin: '0 10px' }}>{moment(date).format('dddd, D')} - {type}</span>
      <Link to={`/clubs/${club}`}>{club}</Link>
    </Box>
    <span className="secondary">{registrations} / {size}</span>
  </ListItem>
);

TournamentListItem.propTypes = {
  onSelect: PropTypes.func,
  league: PropTypes.string,
  type: PropTypes.string,
  club: PropTypes.string,
  size: PropTypes.number,
  date: PropTypes.string,
  registrations: PropTypes.number,
};

export default TournamentListItem;

