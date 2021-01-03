import {StyleSheet} from 'react-native';
import {normalized, PADDING} from '../../../../styles/maxing';

export const stylesSlider = StyleSheet.create({
  container: {},
  items: {
    width: normalized(1, true, 'width'),
    height: normalized(0.5, true, 'width'),
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: null,
    width: null,
  },
  dot: {
    height: 6,
    borderRadius: 5,
    marginHorizontal: 2.5,
    elevation: 4,
  },
  containerDot: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: PADDING,
    left: PADDING,
  },
});
