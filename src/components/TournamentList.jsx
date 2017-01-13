import React from 'react';

import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

const TournamentList = ({}) => (

  <List>
    <ListItem
      justify="between"
      separator="horizontal"
      >
      <span>
        Alan
    </span>
      <span className="secondary">
        happy
    </span>
    </ListItem>
    <ListItem justify="between">
      <span>
        Chris
    </span>
      <span className="secondary">
        cool
    </span>
    </ListItem>
    <ListItem justify="between">
      <span>
        Eric
    </span>
      <span className="secondary">
        odd
    </span>
    </ListItem>
  </List>
);

export default TournamentList;
