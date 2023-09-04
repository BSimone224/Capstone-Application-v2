// StackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OpeningScreen from './opening_page';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={OpeningScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
