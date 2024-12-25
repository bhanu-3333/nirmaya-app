import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DoctorCard from './DoctorCard'

const Stack = createStackNavigator();

export default function MapCardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="DoctorCard" 
        component={DoctorCard} 
        options={{ headerShown: false }}  
      />
     
    </Stack.Navigator>
  );
}
