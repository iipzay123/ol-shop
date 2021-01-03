import {StyleSheet} from 'react-native';
import {COLOR_LIGHT} from '../../../../styles/colors';
import {Fontsize, PADDING, normalized} from '../../../../styles/maxing';

export const stylesItems = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: PADDING,
    paddingVertical: PADDING / 2,
  },
  _footerContainer: {
    paddingHorizontal: PADDING,
    height: normalized(0.1, true, 'width'),
    justifyContent: 'center',
  },
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: COLOR_LIGHT.PRIMARY,
    paddingVertical: PADDING / 2,
  },
  labelButton: {
    fontSize: Fontsize(9),
    fontWeight: 'bold',
    color: COLOR_LIGHT.PRIMARY,
    textAlign: 'center',
  },
  containerHeader: {
    backgroundColor: COLOR_LIGHT.WHITE,
    paddingHorizontal: PADDING,
    height: normalized(0.1, true, 'width'),
    justifyContent: 'center',
  },
  labelHeader: {
    fontSize: Fontsize(9),
    fontWeight: 'bold',
    color: COLOR_LIGHT.PRIMARY,
  },
  itemsContainer: {
    flex: 1,
    backgroundColor: COLOR_LIGHT.WHITE,

    minHeight: normalized(0.5, true, 'width'),
    borderRadius: 5,
    elevation: 3,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  imageItem: {
    width: null,
    flex: 1,
    height: null,
  },
  itemContainerDetail: {
    padding: PADDING,
    paddingVertical: PADDING / 2,
  },
  detailTitle: {
    fontSize: Fontsize(8),
  },
  price: {
    fontSize: Fontsize(8),
    fontWeight: 'bold',
  },
});
