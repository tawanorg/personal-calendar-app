import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, Text } from 'react-native';
import Colors from 'app-constants/Colors';

const WeatherItem = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, { fontSize: 16 }]}>Southbank VIC</Text>
      <Text style={[styles.text]}>Saturday 11:00 am</Text>
      <Text style={[styles.text]}>Cloudy</Text>
      <View style={styles.weather}>
        <Image 
          source={{ uri: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png' }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={[styles.text, { color: Colors.black, fontSize: 28, lineHeight: 28 * 1.5 }]}>14</Text>
        </View>
      </View>
    </View>
  );
};

WeatherItem.propTypes = {
  
}

WeatherItem.defaultProps = {

}

const styles = StyleSheet.create({
  container: {
    color: Colors.black,
    flexDirection: 'column',
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontWeight: "400",
    color: Colors.subText,
    fontSize: 15,
    lineHeight: 18,
  },
  weather: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  }
})

export default WeatherItem;
