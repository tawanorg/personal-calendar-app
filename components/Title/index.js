import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import Colors from 'app-constants/Colors';

const Title = ({ children, size }) => {
  return (
    <Text style={[styles.container, { fontSize: size, lineHeight: size * 1.5 }]}>
    {children}
    </Text>
  );
};

Title.propTypes = {
  size: PropTypes.number,
}

Title.defaultProps = {
  size: 45,
}

const styles = StyleSheet.create({
  container: {
    color: Colors.black,
    fontFamily: 'Lato-Regular',
    fontWeight: "400",
  },
})

export default Title;
