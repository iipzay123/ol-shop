import {Dimensions, Platform,PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');
export const PADDING = width * 0.025;
export const MARGIN = width * 0.025;

export const Fontsize = (size: number) => {
  const newSize = size * height / width
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

export const normalized = (size: number, normal:boolean, mode:"height" | "width") => {
  const newSize = size * height / width 
  if (normal) {
    const sizing = mode === "width" ? width : height
    return size * sizing
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}
