import {StyleSheet} from 'react-native';
import {COLOR_LIGHT} from '../../../../styles/colors';
import {Fontsize, normalized} from '../../../../styles/maxing';

export const stylesInputFlat = StyleSheet.create({
  container: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLOR_LIGHT.PRIMARY,
    fontSize: Fontsize(10),
    marginBottom: normalized(2),
    height: normalized(0.1, true, 'width'),
  },
  label: {color: COLOR_LIGHT.GRAY_A, fontSize: Fontsize(7)},
});
