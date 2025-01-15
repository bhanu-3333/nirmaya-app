import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity ,ImageBackground} from 'react-native';
import * as Location from 'expo-location';

export default function LocationScreen({ navigation }) {
  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Get user's current location
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setUserLocation(location.coords);
  };

  useEffect(() => {
    getLocation();  // Automatically get location on component mount
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/image/lgbg.png')} ></ImageBackground>
        <View style={styles.locationBox}>
          <Text style={styles.title}>Where are you?</Text>
          <Text style={styles.description}>
          {errorMsg ? errorMsg : 'We are fetching your location...'}
          </Text>
          <TouchableOpacity
          style={styles.locateButton}
          onPress={() => navigation.navigate('LocationStack')} 
          >
          <Text style={styles.buttonText}>Locate me</Text>
          </TouchableOpacity>
          <Text 
          style={styles.manualSelect}
          onPress={() => navigation.navigate('LocateMeStack')} 
          >
          Select location manually
        </Text>
        </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  locationBox: {
    position: 'absolute',
    bottom:280,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  locateButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  manualSelect: {
    color: 'black',
    fontSize: 14,
  },
});
