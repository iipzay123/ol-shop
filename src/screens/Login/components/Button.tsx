import React, {PureComponent} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { stylesButton } from './styles/Button';

interface P {
  onPres: () => void;
}


export class Button extends PureComponent<P> {
  render() {
    return (
      <TouchableOpacity  activeOpacity={0.9} onPress={this.props.onPres}>
        <Text> textInComponent </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
