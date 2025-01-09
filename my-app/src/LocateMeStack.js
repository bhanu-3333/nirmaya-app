import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NearbyHospitals from "./NearbyHospitals";


const Stack = createStackNavigator();

export default function LocateMeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="NearbyHospitals" 
        component={NearbyHospitals} 
        options={{ headerShown: false }}  
      />
     
    </Stack.Navigator>
  );
}
