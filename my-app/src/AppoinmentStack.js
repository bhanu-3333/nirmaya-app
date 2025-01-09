import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InsurancePlanScreen from './InsurancePlanScreen'



const Stack = createStackNavigator();

export default function AppoinmentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="InsurancePlanScreen" 
        component={InsurancePlanScreen} 
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  );
}