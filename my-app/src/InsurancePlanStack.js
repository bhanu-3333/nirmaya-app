import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookingConfirmedScreen from './BookingConfirmedScreen'



const Stack = createStackNavigator();

export default function InsuranceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="BookingConfirmedScreen" 
        component={BookingConfirmedScreen} 
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  );
}