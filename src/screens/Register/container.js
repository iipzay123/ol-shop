import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NameBrand from '../../common/NameBrand';
import * as ComponentsGlobal from '../../components';
import {MARGIN} from '../../styles/maxing';
import {styles} from './styles';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countBack: 1,
      emailOrPhone: '',
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({title: 'Daftar'});
  }
  _handleChangeInput = () => {
    //
  };
  render() {
    return (
      <View style={styles.container}>
        <NameBrand />
        <ComponentsGlobal.Components.InputFlat
          onChangeText={this._handleChangeInput}
          value={this.state.emailOrPhone}
          message="contoh:080xxxxxxxx"
          label="Email atau Nomer Ponsel"
          autoFocus
        />
        <ComponentsGlobal.Components.InputFlat
          onChangeText={this._handleChangeInput}
          value={this.state.emailOrPhone}
          message="contoh: @Abcdefgh123"
          label="Password"
        />
        <ComponentsGlobal.Components.ButtonFrom
          onPress={() => {
            console.log('oke');
          }}
          label="Daftar"
          stylesButton={{
            marginTop: MARGIN,
          }}
        />
      </View>
    );
  }
}

export default Register;
