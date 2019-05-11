import React from 'react';
import { View, StyleSheet } from 'react-native';
import Layout from 'app-constants/Layout';
import Colors from 'app-constants/Colors';
import Disabled from './Disabled';

function CalendarDay() {
  return (
    <React.Fragment>
      <Disabled />
      <View style={styles.container} />
    </React.Fragment>
  );
};
 

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: Layout.gutterWidth,
    height: Layout.gutterWidth,
    borderRadius: Layout.gutterWidth / 2,
    marginHorizontal: Layout.gutterWidth,
    position: 'absolute',
    left: -7,
    top: Layout.gutterWidth,
    zIndex: 200,
  },
});

export default CalendarDay;