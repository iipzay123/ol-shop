import {StyleSheet} from 'react-native';
import {COLOR_LIGHT} from '../../styles/colors';
import {Fontsize, normalized, PADDING} from '../../styles/maxing';

export const stylesButtonForm = StyleSheet.create({
  container: {
    backgroundColor: COLOR_LIGHT.PRIMARY,
    alignItems: 'center',
    height: normalized(0.1, true, 'width'),
    justifyContent: 'center',
    borderRadius: 5,
  },
  label: {
    color: COLOR_LIGHT.WHITE,
    fontSize: Fontsize(10),
    textTransform: 'capitalize',
  },
});
