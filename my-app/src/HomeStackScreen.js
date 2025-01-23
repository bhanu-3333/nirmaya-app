import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen"; 
import ServicesScreen from "./ServicesScreen";
import CategoriesPage from "./CategoriesPage";

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}  // Hides header for the HomeScreen
      />
      <HomeStack.Screen 
        name="Categories" 
        component={CategoriesPage} 
        options={{  headerShown: false}}  // Title for the Categories Page
      />
      <HomeStack.Screen 
        name="Services" 
        component={ServicesScreen} 
        options={{  headerShown: false}}  // Title for the Services screen
      />
    </HomeStack.Navigator>
  );
}
