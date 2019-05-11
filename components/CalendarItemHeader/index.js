import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Layout from 'app-constants/Layout';
import Colors from 'app-constants/Colors';
import Title from 'components/Title';
import { formatDay } from 'utils/dateTimeFormatter';

function CalendarItemHeader({ style, date }) {
  console.log('date', date)
  return (
    <View style={[styles.container, style]}>
      <Title size={16}>{formatDay(date)}</Title>
    </View>
  );
};

CalendarItemHeader.propTypes = {
  style: PropTypes.object,
}

CalendarItemHeader.defaultProps = {
  style: null,
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Layout.gutterWidth / 1.5,
    // backgroundColor: Colors.secondary,
  },
});

export default CalendarItemHeader;