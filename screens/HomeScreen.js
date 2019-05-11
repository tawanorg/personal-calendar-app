import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from 'components/Header';

export default class extends React.Component {
  static navigationOptions = {
    header: <Header />,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
