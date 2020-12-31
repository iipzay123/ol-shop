import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {COLOR_LIGHT} from '../../styles/colors';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';
import StatusBarC from '../../common/StatusBar_c';

export class Splash extends Component {
  componentDidMount() {
    this._maintenanceChecking();
  }
  componentDidUpdate() {}
  _maintenanceChecking() {
    this.props.maintenanceServer(false);
    setTimeout(() => {
      this.props.maintenanceServer(true);
      this.props.navigation.reset({
        index: 1,
        routes: [
          {
            name: 'signIn',
          },
        ],
      });
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBarC />
        <Animatable.Text
          animation="fadeIn"
          iterationCount="infinite"
          direction="alternate-reverse"
          style={styles.label}>
          I'ZAZI
        </Animatable.Text>
        <ActivityIndicator color={COLOR_LIGHT.WHITE} />
        <Text style={styles.labelVersion}>v 0.0.01</Text>
      </View>
    );
  }
}

export default Splash;
