import React, {PureComponent} from 'react';
import {Text, TextInput, View} from 'react-native';
import { COLOR_LIGHT } from '../../../styles/colors';
import { Fontsize, normalized, PADDING } from '../../../styles/maxing';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from "react-native-vector-icons/Entypo";

import { stylesHeader } from './styles/Header';

export class Header extends PureComponent {
  render() {
    return (
     <View
            style={stylesHeader.container}>
            <View
              style={stylesHeader.containerInput}>
              <MaterialIcons
                name="search"
                color={COLOR_LIGHT.PRIMARY}
                size={20}
              />
              <TextInput
                placeholder="cari apa yangkamu mau"
                style={stylesHeader.input}
              />
            </View>
            <View
              style={stylesHeader.containerAction}>
              <MaterialIcons
                name="notifications"
                color={COLOR_LIGHT.GRAY_A}
                size={25}
              />
              <Entypo
                name="message"
                color={COLOR_LIGHT.GRAY_A}
                size={25}
              />
            </View>
          </View>
    );
  }
}

export default Header;
