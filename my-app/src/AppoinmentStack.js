import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InsurancePlan from './InsurancePlan'



const Stack = createStackNavigator();

export default function AppoinmentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="InsurancePlan" 
        component={InsurancePlan} 
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  );
}