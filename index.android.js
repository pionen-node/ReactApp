import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { App } from './src/app/components';

export default class ReactApp extends Component {
  render() {
    return <App config={{}} />;
  }
}

AppRegistry.registerComponent('ReactApp', () => ReactApp);