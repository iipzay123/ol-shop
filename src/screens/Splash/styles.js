import * as React from 'react';

import {StyleSheet} from 'react-native';
import {COLOR_LIGHT} from '../../styles/colors';
import {Fontsize, MARGIN, PADDING} from '../../styles/maxing';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_LIGHT.PRIMARY,
    padding: PADDING,
  },
  label: {
    color: COLOR_LIGHT.WHITE,
    fontWeight: 'bold',
    letterSpacing: 3,
    fontSize: Fontsize(12),
    marginBottom: 20,
  },
  labelVersion: {
    color: COLOR_LIGHT.WHITE,
    fontSize: 12,
    position: 'absolute',
    bottom: MARGIN,
  },
});
