import React, {Component} from 'react';
import {Text, ToastAndroid, View, TextInput} from 'react-native';
import {Components} from './components';
import {styles} from './styles';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import StatusBarC from '../../common/StatusBar_c';
import {Fontsize, PADDING, normalized} from '../../styles/maxing';
import {COLOR_LIGHT} from '../../styles/colors';
import InputFlat from './components/InputFlat';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countBack: 1,
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

  render() {
    return (
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
        <StatusBarC light />
        <View style={styles.container}>
          <InputFlat
            value="000329329863"
            label="Email atau Nomer Ponsel"
            message="contoh: 080xxxxxxxxx"
            styleInput={{
              height: normalized(0.05, true, 'width'),
              paddingVertical: 0,
            }}
          />
        </View>
      </AndroidBackHandler>
    );
  }
}

export default Login;
