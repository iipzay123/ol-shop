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
import {TouchableOpacity} from 'react-native-gesture-handler';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countBack: 1,
      emailOrPhone: '',
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({title: 'Masuk'});
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
  _navigateRegister = () => {
    this.props.navigation.navigate('signUp');
  };
  _signIn = () => {
    this.props.navigation.reset({
      index: 3,
      routes: [
        {
          name: 'bottomTabBar',
        },
      ],
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
          <View>
            <TouchableOpacity
              onPress={this._navigateRegister}
              style={{
                paddingVertical: PADDING,
              }}>
              <Text
                style={{
                  fontSize: Fontsize(9),
                }}>
                <Text>Belum punya akun ? </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: COLOR_LIGHT.PRIMARY,
                  }}>
                  Daftar
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
          <ComponentsGlobal.Components.ButtonFrom
            onPress={this._signIn}
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
