import { App as PionenApp } from '@pionen-node/react-native-framework/components/App';
import { connectComponent } from '@pionen-node/react-native-framework/support';
import React from 'react';

import config from './../../config';

class App extends PionenApp.MainComponent {

}

export default connectComponent({
  config,
  namespace: 'App',
})(App);