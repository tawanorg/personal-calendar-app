import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';
import Layout from 'app-constants/Layout';
import Colors from 'app-constants/Colors';
import Header from 'components/Header';
import Avatar from 'components/Avatar';
import { formatDate } from 'utils/dateTimeFormatter';

class ScheduleHeader extends Component {
  render() {
    return (
      <Header style={styles.container}>
        <Avatar size={36} />
        <View style={styles.logo}>
          <Text style={styles.title}>{formatDate(new Date())}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Icon.Feather
              name="plus"
              size={24}
              color={Colors.secondary}
              style={{ marginBottom: -3 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { paddingRight: 0 }]}>
            <Icon.Feather
              name="bell"
              size={24}
              color={Colors.secondary}
              style={{ marginBottom: -3 }}
            />
            <View style={styles.dot}>
              <Text style={styles.dotText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Header>
    );
  }
} 

ScheduleHeader.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any
}

ScheduleHeader.defaultProps = {
  style: null,
  children: null,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Layout.gutterWidth,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.4,
    borderColor: Colors.secondary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: 'Lato-Regular',
    color: Colors.secondary,
  },
  logo: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    paddingHorizontal: Layout.gutterWidth,
    position: 'relative'
  },
  dot: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 18,
    width: 18,
    height: 18,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    right: -5,
    top: -5,
  },
  dotText: {
    color: '#FFFFFF',
    fontSize: 10,
  }
})

export default ScheduleHeader;