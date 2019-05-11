import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  gutterWidth: 15,
  borderRadius: 6,
  isSmallDevice: width < 375,
};
