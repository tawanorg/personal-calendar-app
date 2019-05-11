import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from 'app-constants/Colors';
import Layouts from 'app-constants/Layout';
import defaultAvatar from 'assets/images/avatar.jpeg';

const Avatar = ({ size, name, style, imageUrl }) => {
  return (
    <TouchableOpacity style={[styles.container, {
      width: size,
      height: size,
      borderRadius: size / 2,
      ...name && {
        width: 'auto',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'flex-start'
      },
    }, style]}>
      <View style={name && styles.nameContainer}>
        <View style={[styles.background, {
          width: size - 2,
          height: size - 2,
          borderRadius: (size - 2) / 2,
        }]}>
          <Image
            source={imageUrl ? { uri: imageUrl } : defaultAvatar}
            resizeMode="cover"
            style={[styles.avatar, {
              width: size - 4,
              height: size - 4,
              borderRadius: (size - 4) / 2,
            }]}
          />
        </View>
        {name && (
          <Text style={styles.name} numberOfLines={1}>{name}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
}

Avatar.defaultProps = {
  size: 45,
  name: null,
  imageUrl: null,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Colors.primary,
    zIndex: 10,
  },
  avatar: {},
  background: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Lato-Regular',
    fontWeight: "400",
    color: Colors.primary,
    marginLeft: 5
  }
})

export default Avatar;
