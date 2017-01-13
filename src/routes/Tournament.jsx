import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Markdown from 'grommet/components/Markdown';

import TeamList from '../containers/TeamListContainer';

const tournament = { id: 1, league: 'A', club: 'Eibesbrunn', name: 'Beach Brawl', date: '2017-01-13T19:12:43.454Z', type: 'M', club: 'Eibesbrunn', registrations: 0, size: 16 };
const markdown = `
### Gespielt wird auf 2 Spielfeldern 
ab 9 gemeldeten Teams werden die ersten Runden auf 3 Plätzen gespielt   

###  Falls ihr mit dem Zug anreist, können wir euch gerne in Laa vom Bahnhof abholen und wieder zum Bahnhof bringen.

Falls in Summe 10Teams starten sollten entfällt die Qualifikation, ab 11 Teams würde die Qualifikation um 9:00 starten (Bezugnahme auf Punkt 4.4.3.e. der Ausschreibung) der Hauptbewerb erst um 11:00

#### Beginn des Hauptbewerbs ist um 10 Uhr

#### Checkliste Wulzeshofen
* Essen (eine Kleinigkeit, Toast oder ähnliches)
* Getränke aller Art, unter anderen Cocktails
* 3 Beachvolleyballplätze
* Pool zum abkühlen
* 1 Tischtennis Tisch
* Kaltwasserdusche auf der Anlage
* Warmwasserduschen und Umkleidekabinen in unmittelbarer Nähe
`;
// <div
//   style={{
//     marginBottom: '20px',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     width: '100%',
//     backgroundImage: 'url("/club-header.jpg")',
//     height: '200px',
//   }}
//   />

class Tournament extends Component {
  render() {
    const { params } = this.props;

    return (
      <Box>
        <Box pad="medium" direction="row" colorIndex="light-1" justify="between" style={{ margin: '10px 10px 0 10px' }} >
          <span>
            <Heading>{tournament.league}-Cup &#39;{tournament.name}&#39;</Heading>
            Location: <Link to={`/clubs/${tournament.club}`}>{tournament.club}</Link><br />
            3 / 16 teams have joined
          </span>
          <span style={{ textAlign: 'right' }}>
            <b>{moment(tournament.date).format('MMMM D')}</b><br />
            15 days to go!
          </span>
        </Box>
        <Box direction="row" justify="between">
          <Box colorIndex="light-1" pad="medium" style={{ flexGrow: 2, margin: '10px', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.14)' }} >
            <Markdown content={markdown} />
          </Box>
          <Box colorIndex="light-1" style={{ flexGrow: 1, margin: '10px', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.14)' }} >
            <Heading tag="h2" align="center">Teams</Heading>
            <TeamList />
          </Box>
        </Box>
      </Box >
    );
  }
}

export default Tournament;
