import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookingAppointment from './BookingAppointment';



const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="BookingAppointment" 
        component={BookingAppointment} 
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  );
}