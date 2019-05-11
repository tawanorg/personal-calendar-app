import { StyleSheet } from 'react-native';
import Colors from 'app-constants/Colors';
import Layouts from 'app-constants/Layout';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: Colors.secondary,
    borderTopRightRadius: Layouts.borderRadius,
    borderBottomRightRadius: Layouts.borderRadius,
  },
  wrapper: {
    flexDirection: 'column',
    paddingHorizontal: Layouts.gutterWidth / 2,
    paddingVertical: Layouts.gutterWidth / 2,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontFamily: 'Lato-Regular',
    fontWeight: "400",
  },
  textTime: {
    marginLeft: 5,
    color: Colors.primary,
    fontFamily: 'Lato-Bold',
    fontWeight: "600"
  },
  textLocation: {
    color: Colors.subText,
    fontSize: 12,
  },
  textTitle: {
    fontSize: 16,
  }
})