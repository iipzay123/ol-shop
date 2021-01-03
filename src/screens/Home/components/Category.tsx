import React, {PureComponent} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {COLOR_LIGHT} from '../../../styles/colors';
import {Fontsize, normalized, PADDING} from '../../../styles/maxing';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { stylesCategory } from './styles/Category';

interface P {
  data: Array;
}
const Items = ({item, index, data}) => {
  return (
    <View
      style={[
        stylesCategory.items,
        {
          marginLeft: index === 0 ? PADDING : PADDING / 2,
          marginRight: index === data.length - 1 ? PADDING : PADDING / 2,
          minWidth:
            index === 0
              ? normalized(0.09, true, 'width')
              : normalized(0.3, true, 'width'),
        },
      ]}>
      {index === 0 ? (
        <Entypo
          name="grid"
          color={COLOR_LIGHT.PRIMARY}
          size={normalized(0.06, true, 'width')}
        />
      ) : (
        <Text
          style={{
            fontSize: Fontsize(8),
          }}>
          {item.name}
        </Text>
      )}
    </View>
  );
};
export class Category extends PureComponent<P> {
  render() {
    return (
      <View>
        <FlatList
          horizontal
          data={this.props.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <Items item={item} index={index} data={this.props.data} />;
          }}
          keyExtractor={(_, i) => i.toString()}
        />
      </View>
    );
  }
}

export default Category;
