import React, { PropTypes } from 'react';
import moment from 'moment';

import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';

import TournamentListItem from './TournamentListItem';
import * as propTypes from '../propTypes';

const TournamentList = ({ onSelect, tournaments, addHeaders }) => {
  const items = [];
  let lastMonth = '';

  let index = 0;

  if (!tournaments.length) {
    return <ListPlaceholder emptyMessage="None found" unfilteredTotal={0} filteredTotal={0} />;
  }

  tournaments.forEach((t) => {
    if (addHeaders) {
      const dateMoment = moment(t.date);
      const date = dateMoment.format('YYYYMM');
      if (date !== lastMonth) {
        items.push(<ListItem key={index++}>{dateMoment.format('YYYY MMMM')}</ListItem>);
        lastMonth = date;
      }
    }

    items.push(<TournamentListItem key={index++} {...t} registrations={t.teams.length} onSelect={() => onSelect(t)} />);
  });
  items.push();

  return (
    <List selectable>
      {items}
    </List>
  );
};

TournamentList.propTypes = {
  onSelect: PropTypes.func,
  tournaments: PropTypes.arrayOf(propTypes.tournament),
  addHeaders: PropTypes.bool,
};

export default TournamentList;
