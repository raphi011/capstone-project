import React, { PropTypes } from 'react';
import moment from 'moment';

import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

import TournamentListItem from './TournamentListItem';

const TournamentList = ({ onSelect, tournaments, addHeaders }) => {
  const items = [];
  let lastMonth = '';

  let index = 0;
  tournaments.forEach((t) => {
    if (addHeaders) {
      const dateMoment = moment(t.date);
      const date = dateMoment.format('YYYYMM');
      if (date !== lastMonth) {
        items.push(<ListItem key={index++}>{dateMoment.format('YYYY MMMM')}</ListItem>);
        lastMonth = date;
      }
    }

    items.push(<TournamentListItem key={index++} {...t} onSelect={() => onSelect(t)} />);
  });

  return (
    <List selectable>
      {items}
    </List>
  );
};

TournamentList.propTypes = {
  onSelect: PropTypes.func,
  tournaments: PropTypes.array,
  addHeaders: PropTypes.bool,
};

export default TournamentList;
