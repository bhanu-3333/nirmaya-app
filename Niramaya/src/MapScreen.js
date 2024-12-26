import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

// Haversine formula to calculate distance between two coordinates
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Returns distance in kilometers
};

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const getLocation = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLoading(false);
      },
      (error) => {
        Alert.alert("Error", "Unable to get location.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  // Function to fetch nearby places using OpenStreetMap Nominatim API
  const fetchNearbyPlaces = async (category) => {
    if (!location || !location.latitude || !location.longitude) {
      Alert.alert("Error", "Location not available");
      return;
    }

    const { latitude, longitude } = location;
    const radius = 1000; // Search radius in meters

    try {
      const response = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: {
          q: category,
          format: 'json',
          lat: latitude,
          lon: longitude,
          radius: radius,
          addressdetails: 1,
          limit: 10, // Limit results to avoid large data set
        }
      });

      const places = response.data;
      if (places.length > 0) {
        const filteredPlaces = places.filter((place) => {
          const distance = haversineDistance(
            latitude,
            longitude,
            place.lat,
            place.lon
          );
          return distance <= 1; // Only include places within 1 km radius
        });

        setNearbyPlaces(filteredPlaces);
        setSelectedCategory(category);
      } else {
        Alert.alert("No Results", `No ${category} found nearby.`);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to fetch nearby places.");
    }
  };

  useEffect(() => {
    getLocation();
    const locationInterval = setInterval(() => {
      getLocation(); // Update location every 10 seconds
    }, 10000);

    return () => clearInterval(locationInterval); // Cleanup interval on component unmount
  }, []);

  const renderNearbyPlace = ({ item }) => (
    <View style={styles.placeCard}>
      <Text style={styles.placeName}>{item.display_name}</Text>
      <Text style={styles.placeAddress}>{item.address ? item.address : 'Address not available'}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        region={{
          latitude: location?.latitude || 0,
          longitude: location?.longitude || 0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker coordinate={location} title="Your Location" />
        )}
        {nearbyPlaces.map((place) => (
          <Marker
            key={place.place_id}
            coordinate={{
              latitude: parseFloat(place.lat),
              longitude: parseFloat(place.lon),
            }}
            title={place.display_name}
            description={place.address}
          />
        ))}
      </MapView>

      <View style={styles.infoCard}>
        <Text style={styles.address}>Current Location</Text>
        <View style={styles.optionsContainer}>
          {[
            { label: "Nearby Clinics", category: "clinic" },
            { label: "Nearby Hospitals", category: "hospital" },
            { label: "Nearby Cabs", category: "taxi" },
            { label: "Nearby Homestays", category: "homestay" },
          ].map((option) => (
            <TouchableOpacity
              key={option.label}
              style={styles.optionButton}
              onPress={() => fetchNearbyPlaces(option.category)}
            >
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedCategory && (
          <Text style={styles.selectedCategory}>
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </Text>
        )}
        <FlatList
          data={nearbyPlaces}
          keyExtractor={(item) => item.place_id}
          renderItem={renderNearbyPlace}
          style={styles.placeList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  infoCard: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  address: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  optionsContainer: { flexDirection: "row", flexWrap: "wrap", marginBottom: 10 },
  optionButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  optionText: { color: "white", fontSize: 14 },
  selectedCategory: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  placeList: { marginTop: 10 },
  placeCard: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  placeName: { fontSize: 14, fontWeight: "bold" },
  placeAddress: { fontSize: 12, color: "#555" },
});

export default MapScreen;
