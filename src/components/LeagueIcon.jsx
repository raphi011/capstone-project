import React, { PropTypes } from 'react';

const LeagueIcon = ({ league }) => {
  const style = { fontSize: '20px', fontWeight: 'bold' };

  switch (league) {
    case 'A':
      style.color = '#F44336';
      break;
    case 'B':
      style.color = '#FF9800';
      break;
    case 'C':
      style.color = '#4CAF50';
      break;
    default:
      break;
  }

  return (
    <span style={style}>{league}</span>
  );
};

LeagueIcon.propTypes = {
  league: PropTypes.string,
};

export default LeagueIcon;
