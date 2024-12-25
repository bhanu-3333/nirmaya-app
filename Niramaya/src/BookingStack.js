import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DoctorList from "./DoctorList";



const Stack = createStackNavigator();

export default function BookingStack() {
  return (
    <Stack.Navigator>
    
      <Stack.Screen 
        name="DoctorList" 
        component={DoctorList} 
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  );
}