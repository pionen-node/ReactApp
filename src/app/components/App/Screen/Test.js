import { Container as AppContainer, Screen as AppScreen } from '@pionen-node/react-native-framework/components/App';
import { connectComponent } from '@pionen-node/react-native-framework/support';
import { Text, View } from 'native-base';
import React from 'react';

class Test extends AppScreen.MainComponent {
  render() {
    const {navigation} = this.props;
    const {params: navigationParams} = navigation.state;

    return (
      <AppContainer>
        <View>
          <Text>We have a message for you: "{navigationParams.message}"</Text>
        </View>
      </AppContainer>
    );
  }
}

export default connectComponent({
  namespace: 'App.Screen.Test',
  navigationOptions: {
    title: 'Test Scene',
  },
})(Test);