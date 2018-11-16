import React from 'react';
import { createSwitchNavigator , createStackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import meal1Screen from '../screens/meal1';
import HomeScreen from '../screens/HomeScreen';
import MealScreen from '../screens/MealScreen';


export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  }
  );