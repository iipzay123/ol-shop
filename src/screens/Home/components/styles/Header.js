import {StyleSheet} from 'react-native';
import {COLOR_LIGHT} from '../../../../styles/colors';
import {PADDING, Fontsize, normalized, MARGIN} from '../../../../styles/maxing';

export const stylesHeader = StyleSheet.create({
  container: {
    backgroundColor: COLOR_LIGHT.WHITE,
    padding: PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerInput: {
    backgroundColor: '#efefef',
    height: normalized(0.09, true, 'width'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: PADDING / 2,
    borderRadius: 3,
    flex: 1,
    marginRight: MARGIN,
  },
  input: {
    fontSize: Fontsize(9),
    flex: 1,
  },
  containerAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
