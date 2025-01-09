import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "./SignupScreen";

const Stack = createStackNavigator();

export default function SignupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SignupScreen" 
        component={SignupScreen} 
        options={{ headerShown: false }}  
      />
     
    </Stack.Navigator>
  );
}
