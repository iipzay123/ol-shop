import React, {PureComponent} from 'react';
import {Text, TextInput, View, ViewStyle, TextInputProps} from 'react-native';
import {stylesInputFlat} from './styles/InputFlat';

interface P {
  label: string;
  message: string;
  styleInput?: ViewStyle
}

export class InputFlat extends PureComponent<P & TextInputProps> {
  render() {
    return (
      <View>
        <Text style={stylesInputFlat.label}>{this.props.label}</Text>
        <TextInput {...this.props} style={[stylesInputFlat.container,this.props.styleInput]} />
        <Text style={stylesInputFlat.label}>{this.props.message}</Text>
      </View>
    );
  }
}

export default InputFlat;
