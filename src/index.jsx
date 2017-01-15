import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

import throttle from 'lodash/throttle';
import routes from './routes';
import configureStore from './configureStore';
import { saveState, loadState } from './localStorage';

if (navigator.serviceWorker) {
  const registration = runtime.register();
}

const state = loadState();
const store = configureStore(state);
const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(throttle(() => {
  const currentState = { ...store.getState() };

  delete currentState.notification;
  delete currentState.routing;
  
  console.log('saving state', currentState);

  saveState(currentState);
}, 1000));

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./routes', render);
}
