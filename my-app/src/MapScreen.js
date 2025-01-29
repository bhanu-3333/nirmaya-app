import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, TextInput, Alert, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App({ navigation }) {
  const [location, setLocation] = useState(null); // User's live location (red marker)
  const [searchQuery, setSearchQuery] = useState(""); // Search bar input
  const [loading, setLoading] = useState(true); // Loading spinner state
  const [searchedLocation, setSearchedLocation] = useState(null); // Searched location (blue marker)

  useEffect(() => {
    (async () => {
      // Request location permissions
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "We need location permissions to show your location.");
        setLoading(false);
        return;
      }

      // Fetch the current (live) location
      const userLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setLoading(false); // Stop loading spinner
    })();
  }, []);

  // Handle the search functionality
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      Alert.alert("Empty Search", "Please enter a location.");
      return;
    }

    try {
      // Use Google Maps Geocoding API
      const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        searchQuery
      )}&key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;

        // Update the searched location
        setSearchedLocation({
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

        // Center the map on the searched location
        setLocation({
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      } else {
        // If no results are found, show an alert and ensure live location marker remains
        Alert.alert("Location Not Found", "Please try another search.");
        setSearchedLocation(null); // Remove any previously searched marker
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      Alert.alert("Error", "An error occurred while searching for the location. Please try again.");
    }
  };

  // Show loading spinner while fetching the initial location
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a location"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch} // Trigger search on "Enter"
      />

      {/* Map View */}
      <MapView
        style={styles.map}
        region={location} // Center map on the live or searched location
        showsUserLocation={true} // Show user's current location as a blue dot
      >
        {/* Marker for live location */}
        {location && (
          <Marker
            coordinate={location}
            pinColor="red" // Red marker for live location
            title="Your Live Location"
          />
        )}

        {/* Marker for searched location */}
        {searchedLocation && (
          <Marker
            coordinate={searchedLocation}
            pinColor="blue" // Blue marker for searched location
            title="Searched Location"
          />
        )}
      </MapView>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Nearby Clinics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Nearby Homestays</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cabs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Nearby Hospitals</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.locationText}>
          {location
            ? `Lat: ${location.latitude.toFixed(4)}, Lng: ${location.longitude.toFixed(4)}`
            : "Location not available"}
        </Text>

        <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate("MapCardStack")}>
          <Text style={styles.confirmText}>Tap to Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  searchBox: {
    position: "absolute",
    top: 100,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  searchInput: {
    fontSize: 16,
  },
  bottomContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 5,
  },
  buttonText: {
    fontSize: 14,
  },
  locationText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  confirmText: {
    color: "white",
    fontSize: 16,
  },
});
