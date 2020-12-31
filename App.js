import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './src/redux/store';
import Router from './src/router';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
