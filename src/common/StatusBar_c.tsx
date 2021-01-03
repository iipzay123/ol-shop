import React, {PureComponent} from 'react';
import {StatusBar} from 'react-native';
import {COLOR_LIGHT} from '../styles/colors';

interface P {
  primary: boolean;
  light: boolean;
}

export class StatusBarC extends PureComponent<P> {
  render() {
    return (
      <StatusBar
        translucent={false}
        backgroundColor={this.props.primary ?COLOR_LIGHT.PRIMARY :this.props.light ? "#fff": COLOR_LIGHT.PRIMARY }
        barStyle={this.props.primary ?"light-content" :this.props.light ? "dark-content": "light-content" }
      />
    );
  }
}

export default StatusBarC; 
