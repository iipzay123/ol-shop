import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  ToastAndroid,
  Animated,
  StatusBar,
} from 'react-native';
import StatusBarC from '../../common/StatusBar_c';
import {COLOR_LIGHT} from '../../styles/colors';
import {normalized, PADDING} from '../../styles/maxing';
import {styles} from './styles';
import {AndroidBackHandler} from 'react-navigation-backhandler';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countBack: 1,
    };
    this.scrollY = new Animated.Value(0);
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
  _handleScroll = () => {};
  render() {
    const opacity = this.scrollY.interpolate({
      inputRange: [
        normalized(0.4, true, 'width'),
        normalized(0.6, true, 'width'),
      ],
      outputRange: [0, 1],
    });
    return (
      <>
        <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
          <Animated.ScrollView
            contentContainerStyle={{}}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {y: this.scrollY}},
                },
              ],
              {
                useNativeDriver: true,
              },
            )}>
            <View
              style={{
                backgroundColor: '#aaa',
                height: 200,
              }}
            />
            {Array.from(Array(1000), (_, x) => x).map((d, i) => {
              return <Text key={i}> textInComponent {i} </Text>;
            })}
          </Animated.ScrollView>
          <Animated.View
            style={{
              padding: PADDING,
              backgroundColor: COLOR_LIGHT.WHITE,
              opacity,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: normalized(0.1, true, 'width'),
              justifyContent: 'center',
              zIndex: 100,
            }}
          />
          <View
            style={{
              padding: PADDING,
              height: normalized(0.1, true, 'width') + StatusBar.currentHeight,
              position: 'absolute',
              paddingTop: StatusBar.currentHeight,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Izazi
            </Text>
          </View>
        </AndroidBackHandler>
      </>
    );
  }
}

export default Home;
