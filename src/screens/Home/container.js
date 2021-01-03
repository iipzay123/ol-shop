/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  ToastAndroid,
  Animated,
  StatusBar,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import StatusBarC from '../../common/StatusBar_c';
import {COLOR_LIGHT} from '../../styles/colors';
import {Fontsize, normalized, PADDING} from '../../styles/maxing';
import {styles} from './styles';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import {ComponentsHome} from './components';
import LinearGradient from 'react-native-linear-gradient';
const Spacing = () => <View style={{marginVertical: PADDING / 2}} />;
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countBack: 1,
      adsProductPopular: [],
      category: [],
      product: [],
      currentIndex: 0,
      loadingSlider: true,
    };
  }

  componentDidMount() {
    this._getProductPopular();
    this._getCategory();
    this._getProduct();
  }
  _getProduct = () => {
    let dummy = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    this.setState({
      product: dummy,
    });
  };
  _getCategory = () => {
    const dummy = [
      {
        name: '',
        disabled: false,
      },
      {
        name: 'Special diskon gede2an 1.1',
        disabled: false,
      },
      {
        name: 'Promo',
        disabled: false,
      },
      {
        name: 'Gamis',
        disabled: false,
      },
      {
        name: 'Krudung',
        disabled: false,
      },
      {
        name: 'Rok',
        disabled: false,
      },
      {
        name: 'Tas',
        disabled: false,
      },
      {
        name: 'Sepatu',
        disabled: false,
      },
    ];
    this.setState({
      category: dummy,
    });
  };
  _getProductPopular() {
    let dummy = [
      {
        images:
          'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/tokopedia_20180525_095150.jpg',
      },
      {
        images: 'https://i.ytimg.com/vi/POTolSEe_A4/maxresdefault.jpg',
      },
      {
        images:
          'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/tokopedia_20180525_095150.jpg',
      },
      {
        images: 'https://i.ytimg.com/vi/POTolSEe_A4/maxresdefault.jpg',
      },
    ];
    this.setState({
      adsProductPopular: dummy,
      loadingSlider: false,
    });
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
      ToastAndroid.show('Tekan dua kali untuk keluar', 1000);
      return true;
    }
    return false;
  };

  render() {
    if (this.state.loadingSlider) {
      return <View />;
    }
    return (
      <>
        <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
          <StatusBarC light />
          <ComponentsHome.Header />
          <ScrollView>
            <ComponentsHome.Slider
              autoPlay
              data={this.state.adsProductPopular}
            />
            <Spacing />
            <ComponentsHome.Category data={this.state.category} />
            <Spacing />
            <ComponentsHome.ListProduct data={this.state.product} />
          </ScrollView>
        </AndroidBackHandler>
      </>
    );
  }
}

export default Home;
