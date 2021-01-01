import React, {Component} from 'react';
import {Text, ToastAndroid, View, TextInput, Image} from 'react-native';
import {Components} from './components';
import {styles} from './styles';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import StatusBarC from '../../common/StatusBar_c';
import {Fontsize, PADDING, normalized, MARGIN} from '../../styles/maxing';
import {COLOR_LIGHT} from '../../styles/colors';
import InputFlat from '../../components/InputFlat';
import * as ComponentsGlobal from '../../components';
import NameBrand from '../../common/NameBrand';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countBack: 1,
      emailOrPhone: '',
    };
  }
  componentDidMount() {
    this.props.navigation.setOptions({title: 'Login'});
  }
  onBackButtonPressAndroid = () => {
    setTimeout(() => {
      this.setState({
        countBack: 1,
      });
    }, 200);
    if (this.state.countBack !== 0) {
      this.setState({
        countBack: (this.state.countBack -= 1),
      });
      ToastAndroid.show('tekan dua kali untuk keluar', 1000);
      return true;
    }
    return false;
  };
  _handleChangeInput = (text) => {
    const number = /^d+$/;
    console.log(number.test(text));
    this.setState({
      emailOrPhone: text,
    });
  };
  render() {
    return (
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
        <StatusBarC light />
        <View style={styles.container}>
          <NameBrand />
          <ComponentsGlobal.Components.InputFlat
            onChangeText={this._handleChangeInput}
            value={this.state.emailOrPhone}
            label="Email atau Nomer Ponsel"
            message="contoh: 080xxxxxxxxx"
          />
          <ComponentsGlobal.Components.ButtonFrom
            onPress={() => {
              console.log('oke');
            }}
            label="Masuk"
            stylesButton={{
              marginTop: MARGIN,
            }}
          />
        </View>
      </AndroidBackHandler>
    );
  }
}

export default Login;
