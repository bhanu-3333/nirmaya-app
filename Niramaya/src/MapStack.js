import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LocationScreen from "./LocationScreen"; 


const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="LocationScreen" 
        component={LocationScreen} 
        options={{ headerShown: false }}  
      />
     
    </Stack.Navigator>
  );
}
