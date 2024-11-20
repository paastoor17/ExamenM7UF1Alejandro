// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SomeScreen from '../screens/SomeScreen';
import ListScreen from '../screens/ListScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="SomeScreen" component={SomeScreen} />
    <Stack.Screen name="ListScreen" component={ListScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
