import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";




const Stack = createStackNavigator();

export default function DoctorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  );
}