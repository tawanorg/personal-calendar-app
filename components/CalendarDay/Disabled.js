import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Layout from 'app-constants/Layout';
import Colors from 'app-constants/Colors';

function CalendarDay({ style }) {
  return (
    <View style={[styles.container, style]} />
  );
};

CalendarDay.propTypes = {
  style: PropTypes.object,
}

CalendarDay.defaultProps = {
  style: null,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.borderColor,
    height: '100%',
    width: 0.4,
    marginHorizontal: Layout.gutterWidth,
    zIndex: 100,
  },
});

export default CalendarDay;