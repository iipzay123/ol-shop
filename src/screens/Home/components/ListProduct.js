/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR_LIGHT} from '../../../styles/colors';
import {Fontsize, normalized, PADDING} from '../../../styles/maxing';
import {stylesItems} from './styles/Product';

interface P {
  data: Array;
}
const Items = ({item, data, index}) => {
  return (
    <View
      style={[
        stylesItems.itemsContainer,
        {
          marginRight: index % 2 === 0 ? PADDING / 2 : 0,
          marginLeft: index % 2 !== 0 ? PADDING / 2 : 0,
        },
      ]}>
      <Image
        source={{
          uri:
            'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//111/MTA-7995468/kasmira_hijab_kasmira_hijab_bergo_maryam_muslimah_full01_qcthz6st.jpg',
        }}
        style={stylesItems.imageItem}
      />
      <View style={stylesItems.itemContainerDetail}>
        <Text style={stylesItems.detailTitle}>Hijab kuning</Text>
        <Text style={stylesItems.detailTitle}>Stock: 9rb</Text>
        <Text style={stylesItems.price}>Rp. 12.000</Text>
      </View>
    </View>
  );
};
const HeaderComponent = () => {
  return (
    <View style={stylesItems.containerHeader}>
      <Text style={stylesItems.labelHeader}>REKOMEDASI</Text>
    </View>
  );
};
const FooterComponent = () => {
  return (
    <View style={stylesItems._footerContainer}>
      <TouchableOpacity style={stylesItems.buttonContainer}>
        <Text style={stylesItems.labelButton}>Lihat Lainnya</Text>
      </TouchableOpacity>
    </View>
  );
};
export class ListProduct extends PureComponent<P> {
  render() {
    return (
      <View>
        <FlatList
          ListHeaderComponent={() => {
            return <HeaderComponent />;
          }}
          numColumns={2}
          columnWrapperStyle={stylesItems.container}
          data={this.props.data}
          renderItem={({item, index}) => {
            return (
              <Items
                key={index}
                item={item}
                index={index}
                data={this.props.data}
              />
            );
          }}
          ListFooterComponent={() => {
            return <FooterComponent />;
          }}
        />
      </View>
    );
  }
}

export default ListProduct;
