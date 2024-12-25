// src/navigation/JoinStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import JoinScreen from './JoinScreen';

const Stack = createStackNavigator();

const JoinStack = () => {
  return (
    <Stack.Navigator initialRouteName="Join">
      <Stack.Screen
        name="Join"
        component={JoinScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default JoinStack;
