import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';
import Colors from 'app-constants/Colors';
import Layouts from 'app-constants/Layout';

const SearchBox = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.box}>
        <Icon.Feather
          name="search"
          size={18}
          color={Colors.primary}
          style={styles.icon}
        />
        <Text style={styles.text}>Search for people or your schedules..</Text>
      </TouchableOpacity>
    </View>
  );
};

SearchBox.propTypes = {
  style: PropTypes.object,
}

SearchBox.defaultProps = {
  style: null,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Layouts.gutterWidth,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    padding: Layouts.gutterWidth / 2,
  },
  icon: {
    opacity: 0.85
  },
  text: {
    color: Colors.primary,
    marginLeft: Layouts.gutterWidth / 2,
    opacity: 0.85
  }
})

export default SearchBox;
