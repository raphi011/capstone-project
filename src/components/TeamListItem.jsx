import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import ListItem from 'grommet/components/ListItem';
import Box from 'grommet/components/Box';

const TeamListItem = ({ team, tournamentFinished }) => {
  if (tournamentFinished) {
    return (
      <ListItem>Not implemented</ListItem>
    );
  } else {
    return (
      <ListItem justify="between">
        <span>
          <span>{team.nr}. </span>
          <Link to="#">{team.player1}</Link>
          <span> / </span>
          <Link to="#">{team.player2}</Link>
        </span>
        <span title="Total Points" className="secondary">{team.points} P.</span>
      </ListItem>
    );
  }

  // <ListItem
  //   onClick={(e) => { if (e.target.tagName.toLowerCase() !== 'a') onSelect(); } }
  //   justify="between"
  //   separator="horizontal"
  //   >
  //   <Box direction="row" >
  //     <LeagueIcon league={league} />
  //     <span style={{ margin: '0 10px' }}>{type}</span>
  //     <Link to={`/club/${club}`}>{club}</Link>
  //   </Box>
  //   <span className="secondary">{date} {registrations} / {size}</span>
  // </ListItem>
};

TeamListItem.propTypes = {
  team: PropTypes.object,
  tournamentFinished: PropTypes.bool,
};

export default TeamListItem;


