import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'utils/StatusBarHeight';

function Header({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Text>Header</Text>
    </View>
  );
};

Header.propTypes = {
  style: PropTypes.object,
}

Header.defaultProps = {
  style: null,
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
  }
})

export default Header;