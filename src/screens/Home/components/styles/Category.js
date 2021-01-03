import {StyleSheet} from 'react-native';
import {COLOR_LIGHT} from '../../../../styles/colors';
import {normalized, PADDING} from '../../../../styles/maxing';

export const stylesCategory = StyleSheet.create({
  items: {
    borderRadius: 5,
    backgroundColor: COLOR_LIGHT.WHITE,
    height: normalized(0.09, true, 'width'),
    marginHorizontal: PADDING / 2,
    padding: PADDING / 2,
    alignItems: 'center',
    elevation: 3,
    marginVertical: PADDING / 2,
    justifyContent: 'center',
  },
});
