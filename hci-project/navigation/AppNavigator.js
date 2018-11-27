import React from 'react';
import { createSwitchNavigator , createStackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import meal1Screen from '../screens/meal1';
import HomeScreen from '../screens/HomeScreen';
import MealScreen from '../screens/MealScreen';
import FrontScreen from '../screens/FrontScreen';
import TargetScreen from '../screens/TargetScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const FrontStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Front: FrontScreen,
  Target: TargetScreen,
});

export default createSwitchNavigator({
    Front: FrontStack,
    Main: MainTabNavigator,
  }
  );