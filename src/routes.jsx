import * as React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Users from './components/Users';
import Teams from './components/Teams';
import Tournaments from './components/Tournaments';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/teams" component={Teams} />
    <Route path="/tournaments" component={Tournaments} />
  </Route>
);

export default routes;
