import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'expo';
import { View, Text } from 'react-native';
import Layouts from 'app-constants/Layout';
import styles from './styles';

const CalendarItem = ({
  style,
  kind,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.wrapper]}>
        <Text>You're free today, no activity!</Text>
      </View>
    </View>
  );
};

CalendarItem.propTypes = {
  kind: PropTypes.string,
}

CalendarItem.defaultProps = {
  kind: 'default',
}

export default CalendarItem;
