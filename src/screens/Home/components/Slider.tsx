/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, FlatList, StyleSheet} from 'react-native';
import {COLOR_LIGHT} from '../../../styles/colors';
import {normalized} from '../../../styles/maxing';
import {stylesSlider} from './styles/Slider';

interface P {
  data: Array<T>;
  autoPlay: boolean;
  delay: number;
  currentIndex: number;
}

const Items = ({item}) => {
  return (
    <View style={stylesSlider.items}>
      <Image
        source={{
          uri: item.images || '',
        }}
        style={stylesSlider.image}
      />
    </View>
  );
};

export class Slider extends Component<P> {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.interval = null;
  }
  componentDidMount() {
    if (this.props.autoPlay) {
      this._playSlider();
    } else {
      this.interval = null;
    }
  }
  _playSlider() {
    this.interval = setInterval(() => {
      if (this.state.currentIndex >= this.props.data.length - 1) {
        this.setState({
          currentIndex: 0,
        });
      } else {
        this.setState({
          currentIndex: (this.state.currentIndex += 1),
        });
      }
      this.flatList.scrollToIndex({
        animated: true,
        index: this.state.currentIndex,
      });
    }, this.props.delay || 2000);
  }
  render() {
    console.log(this.state.currentIndex);

    return (
      <View>
        <FlatList
          ref={(ref) => (this.flatList = ref)}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={this.props.data}
          renderItem={({item, index}) => {
            return <Items key={index} item={item} />;
          }}
          keyExtractor={(_, i) => i.toString()}
        />
        <View style={stylesSlider.containerDot}>
          {this.props.data.map((d, i) => {
            return (
              <View
                key={i}
                style={[
                  stylesSlider.dot,
                  {
                    width: this.state.currentIndex === i ? 15 : 6,
                    backgroundColor:
                      this.state.currentIndex === i
                        ? COLOR_LIGHT.PRIMARY
                        : '#fff',
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

export default Slider;
