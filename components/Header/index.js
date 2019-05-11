import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'utils/StatusBarHeight';
import Layout from 'app-constants/Layout';
import Colors from 'app-constants/Colors';

function Header({ style, children }) {
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, style]}>
        {children}
      </View>
    </View>
  );
};

Header.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any
}

Header.defaultProps = {
  style: null,
  children: null,
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    backgroundColor: Colors.primary,
  },
  wrapper: {
    backgroundColor: '#FFFFFF',
    height: 60,
    // borderBottomWidth: 0.4,
    // borderColor: Colors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default Header;