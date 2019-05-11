import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'expo';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from 'app-constants/Colors';
import Layouts from 'app-constants/Layout';
import BarKind from 'components/BarKind';
import Avatar from 'components/Avatar';
import styles from './styles';

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
            imageUrl="https://media.licdn.com/dms/image/C5103AQE91wA7kjgLoA/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=Nkj45e5Scs9xVZD3wSwosFlH3N9X_8yt-UbN715IJ24"
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

export default CalendarItem;
