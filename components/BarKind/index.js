import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Colors from 'app-constants/Colors';
import Layouts from 'app-constants/Layout';

const BarKind = ({ kind }) => {
  return (
    <View style={[styles.container, kind && styles[kind]]} />
  );
};

BarKind.propTypes = {
  kind: PropTypes.string,
}

BarKind.defaultProps = {
  kind: null,
}

const styles = StyleSheet.create({
  container: {
    width: 5,
    borderBottomLeftRadius: Layouts.borderRadius,
    borderTopLeftRadius: Layouts.borderRadius,
    height: '100%',
  },
  default: {
    backgroundColor: Colors.primary,
  },
  success: {
    backgroundColor: Colors.success,
  },
  warn: {
    backgroundColor: Colors.warn,
  },
  danger: {
    backgroundColor: Colors.danger,
  }
})

export default BarKind;
