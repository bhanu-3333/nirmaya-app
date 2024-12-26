import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './src/OnboardingScreen';
import AppScreen from './src/AppScreen';
import MainScreen from './src/MainScreen';
import JoinScreen from './src/JoinScreen';
import HomeStackScreen from './src/HomeStackScreen';
import BookingStack from './src/BookingStack';
import DoctorStack from './src/DoctorStack';
import ProfileStack from './src/ProfileStack';
import AppoinmentStack from './src/AppoinmentStack';
import InsuranceStack from './src/InsuranceStack';
import InsurancePlanStack from './src/InsurancePlanStack';
import MapStack from './src/MapStack'
import LocationStack from './src/LocationStack'
import LocateMeStack from './src/LocateMeStack';
import LoginStack from './src/LoginStack';
import MapCardStack from './src/MapCardStack';
import SignupStack from './src/SignupStack';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Onboarding Stack */}
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />

          {/* App Screen Stack */}
          <Stack.Screen name="AppScreen" component={AppScreen} />

          {/* Main Screen Stack */}
          <Stack.Screen name="Main" component={MainScreen} />

          {/* Join Screen Stack */}
          <Stack.Screen name="Join" component={JoinScreen} />

          {/* Login Stack */}
          <Stack.Screen name="LoginStack" component={LoginStack} />

          {/* Signup Stack */}
          <Stack.Screen name="SignupStack" component={SignupStack} />

          {/* Home Stack Screen */}
          <Stack.Screen name="Home" component={HomeStackScreen} />

          {/* Booking Stack */}
          <Stack.Screen name="BookingStack" component={BookingStack} />

          {/* Doctor Stack */}
          <Stack.Screen name="DoctorStack" component={DoctorStack} />

          {/* Profile Stack */}
          <Stack.Screen name="ProfileStack" component={ProfileStack} />

          {/* Appointment Stack */}
          <Stack.Screen name="AppointmentStack" component={AppoinmentStack} />

          {/* Insurance Stack */}
          <Stack.Screen name="InsuranceStack" component={InsuranceStack} />

          {/* Insurance Plan Stack */}
          <Stack.Screen name="InsurancePlanStack" component={InsurancePlanStack} />
           
           {/* Map Stack */}
          <Stack.Screen name="MapStack" component={MapStack} />
            {/* Location Stack */}
            <Stack.Screen name="LocationStack" component={LocationStack} />
          
          {/* Locate Me Stack */}
          <Stack.Screen name="LocateMeStack" component={LocateMeStack} />

          {/* Map Card Stack */}
          <Stack.Screen name="MapCardStack" component={MapCardStack} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
