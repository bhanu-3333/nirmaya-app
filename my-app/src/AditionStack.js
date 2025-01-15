import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DoctorProfileadition from "./DoctorProfileadition";



const Stack = createStackNavigator();

export default function InsuranceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="DoctorProfileadition" 
        component={DoctorProfileadition} 
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  );
}