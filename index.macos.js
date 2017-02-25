import React, { Component } from 'react';
import {
  AppRegistry,

} from 'react-native-macos';

import App from './containers/App'

class Mailer extends Component {
  render() {
    return (
      <App />
    );
  }
};


AppRegistry.registerComponent('Mailer', () => Mailer);
