import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons , AntDesign, FontAwesome} from '@expo/vector-icons';
import Colors from '../constants/Colors';

import MealScreen from '../screens/MealScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import FavouritesScreen from '../screens/FavouritesScreen'
//profile
import HomeScreen from '../screens/HomeScreen';


import meal1Screen from '../screens/meal1';
import meal2Screen from '../screens/meal2';
import meal3Screen from '../screens/meal3';
import meal4Screen from '../screens/meal4';
import meal5Screen from '../screens/meal5';



const MealsStack = createStackNavigator({
  Meals: MealScreen,
  Favourites: FavouritesScreen,
});

MealsStack.navigationOptions = {
  tabBarLabel: 'Meals',
  tabBarOptions: { activeTintColor:'red', },
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
     name= "food-apple"
     size={26}
     style={{ marginBottom: -3 }}
     color={focused ? color='red' : Colors.tabIconDefault}
     
    />
  ),
};

const WorkoutStack = createStackNavigator({
  Workout: WorkoutScreen,
});
WorkoutStack.navigationOptions = {
  tabBarLabel: 'Workout',
  tabBarOptions: { activeTintColor:'#696969', },
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
     name= "dumbbell"
     size={26}
     style={{ marginBottom: -3 }}
     color={focused ? color='#696969' : Colors.tabIconDefault}
     
    />
  ),
};

const FavouritesStack = createStackNavigator({
  Favourites: FavouritesScreen,
  Meal1: meal1Screen,
  Meal2: meal2Screen,
  Meal3: meal3Screen,
  Meal4: meal4Screen,
  Meal5: meal5Screen,
});

FavouritesStack.navigationOptions = {
  tabBarLabel: 'Favourites',
  tabBarOptions: { activeTintColor:'#FFB6C1', },
  tabBarIcon: ({ focused }) => (
    <AntDesign
     name= "heart"
     size={26}
     style={{ marginBottom: -3 }}
     color={focused ? color='#FFB6C1' : Colors.tabIconDefault}
     
    />
  ),
};



const ProfileStack = createStackNavigator({
  Home: HomeScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <FontAwesome
     name= "user"
     size={26}
     style={{ marginBottom: -3 }}
     color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
     
    />
  ),
};


export default createBottomTabNavigator({
  MealsStack,
  WorkoutStack,
  FavouritesStack,
  ProfileStack,
});
