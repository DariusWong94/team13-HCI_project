import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons , AntDesign} from '@expo/vector-icons';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import MealScreen from '../screens/MealScreen';
import SettingsScreen from '../screens/SettingsScreen';

import meal1Screen from '../screens/meal1';
import meal2Screen from '../screens/meal2';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
},{
  navigationOptions: {
    title: 'Home'
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
     name= "home"
     size={26}
     style={{ marginBottom: -3 }}
     color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
     
    />
  ),
};

const MealsStack = createStackNavigator({
  Meals: MealScreen,
  Meal1: meal1Screen,
  Meal2: meal2Screen
});

MealsStack.navigationOptions = {
  tabBarLabel: 'Meals',
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
     name= "food-apple"
     size={26}
     style={{ marginBottom: -3 }}
     color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
     
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <AntDesign
     name= "setting"
     size={26}
     style={{ marginBottom: -3 }}
     color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
     
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MealsStack,
  SettingsStack,
});
