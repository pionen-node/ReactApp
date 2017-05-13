import React from 'react';

import {
  Home as AppScreenHome,
  Test as AppScreenTest,
} from './components/App/Screen';
import { app } from './themes';

export default {
  App: {
    Navigation: {
      screenProps: {
        //
      },
      stackRouter: {
        Home: {
          screen: AppScreenHome,
          navigationOptions: ({navigation}) => ({
            title: 'Home',
          }),
        },
        Test: {
          screen: AppScreenTest,
        },
      },
    },
    Screen: {
      Home: {
        foo: 'bar', //todo ConfigProvider, component based path access.
      }
    },
    theme: app,
  },
};