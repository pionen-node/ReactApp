import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { App } from './src/app/components';

export default class ReactApp extends Component {
  render() {
  //throw new Error('The phone is being observed by an unauthanticated user!');
    return <App config={{}} />;
  }
}

AppRegistry.registerComponent('ReactApp', () => ReactApp);