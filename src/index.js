import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App.js';
import rootReducer from './rootReducer';

let store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

let root = document.getElementById('root');

render(
  <Provider store={store} >
    <App />
  </Provider>,
  root
);

//Adding Hot Module Reloading to Create React App
if (module.hot) {
  module.hot.accept(App, () => {
    const NextApp = App.default;
    render(
      <NextApp />,
      root
    );
  });
}
