// src/navigation/MainStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
