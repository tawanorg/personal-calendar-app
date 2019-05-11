import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from 'components/TabBarIcon';
import HomePageContainer from 'containers/HomePage';
import SchedulePageContainer from 'containers/SchedulePage';
import SettingsScreen from 'screens/SettingsScreen';
import Colors from 'app-constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomePageContainer,
});

HomeStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <Icon.MaterialCommunityIcons
      name="calendar-check"
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const ScheduleStack = createStackNavigator({
  Schedule: SchedulePageContainer,
});

ScheduleStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <Icon.MaterialCommunityIcons
      name="calendar-multiselect"
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const OrganisationStack = createStackNavigator({
  Organisation: SettingsScreen,
});

OrganisationStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <Icon.MaterialCommunityIcons
      name="account-box-multiple"
      size={26}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ScheduleStack,
  OrganisationStack,
  SettingsStack,
});
