import { Container as AppContainer, Screen as AppScreen } from '@pionen-node/react-native-framework/components/App';
import { connectComponent } from '@pionen-node/react-native-framework/support';
import { Button, Col, Grid, Icon, Row, Text } from 'native-base';
import React from 'react';

class Home extends AppScreen.MainComponent {
  render() {
    const {navigation} = this.props;
    const {style} = this.props;

    return (
      <AppContainer>
        <Grid>
          <Row>
            <Col style={style.col}>
              <Button style={style.button} block
                      onPress={() => {
                        navigation.navigate('Test', {message: 'Hello World'});
                      }}
              >
                <Icon name="disc" style={style.icon} />
                <Text>Test</Text>
              </Button>
            </Col>
            <Col style={style.col}>
              <Button style={style.button} block disabled />
            </Col>
          </Row>
          <Row>
            <Col style={style.col}>
              <Button style={style.button} block disabled />
            </Col>
            <Col style={style.col}>
              <Button style={style.button} block disabled />
            </Col>
          </Row>
          <Row>
            <Col style={style.col}>
              <Button style={style.button} block disabled />
            </Col>
            <Col style={style.col}>
              <Button style={style.button} block disabled />
            </Col>
          </Row>
        </Grid>
      </AppContainer>
    );
  }
}

export default connectComponent({
  namespace: 'App.Screen.Home',
  navigationOptions: {},
  style: {
    button: {
      flex: 1,
      flexDirection: 'column',
    },
    col: {
      padding: 10,
    },
    icon: {
      fontSize: 48,
    }
  },
})(Home);