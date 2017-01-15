import * as React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App';
// import Home from './routes/Home';
// import User from './routes/User';
// import Users from './routes/Users';
// import Club from './routes/Club';
// import Clubs from './routes/Clubs';
import Tournaments from './routes/Tournaments';
import Tournament from './routes/Tournament';

const routes = (
  <Route path="/" component={App}>
    {/* <IndexRoute component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/users/:name" component={User} />
    <Route path="/clubs" component={Clubs} />
    <Route path="/clubs/:name" component={Club} /> */}
    <IndexRoute component={Tournaments} />
    <Route path="/tournaments" component={Tournaments} />
    <Route path="/tournaments/:id" component={Tournament} />
  </Route>
);

export default routes;
