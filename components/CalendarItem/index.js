import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'expo';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from 'app-constants/Colors';
import Layouts from 'app-constants/Layout';
import BarKind from 'components/BarKind';
import Avatar from 'components/Avatar';

const CalendarItem = ({
  style,
  kind,
}) => {
  return (
    <View style={[styles.container, style]}>
      <BarKind kind={kind} />
      <View style={styles.wrapper}>
        <View style={styles.timeContainer}>
          <Icon.Ionicons
            name="md-time"
            size={15}
            color={Colors.primary}
          />
          <Text style={[styles.text, styles.textTime]}>
            9.00 AM - 12.00 AM
          </Text>
        </View>
        <Text 
          style={[styles.text, styles.textTitle]}
          numberOfLines={2}
        >Discuss about the new interactive plan</Text>
        <Text 
          style={[styles.text, styles.textLocation]}
          numberOfLines={2}
        >
          45 Clark Street, Southbank, VIC
        </Text>
        <View style={{ marginTop: Layouts.gutterWidth }}>
          <Avatar 
            size={32} 
            name="Porntip Saelim"
          />
        </View>
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

const styles = StyleSheet.create({
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

export default CalendarItem;
