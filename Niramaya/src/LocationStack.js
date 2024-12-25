import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./MapScreen";

const Stack = createStackNavigator();

export default function LocationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MapScreen" 
        component={MapScreen} 
        options={{ headerShown: false }}  
      />
     
    </Stack.Navigator>
  );
}
