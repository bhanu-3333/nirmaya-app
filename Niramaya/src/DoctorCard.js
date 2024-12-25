import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from "react-native-vector-icons/Ionicons";

// DoctorCard Component
const DoctorCard = ({ navigation, name, specialty, experience, fee, distance }) => {
  return (
    <View style={styles.card}>
      <Image 
        source={require("../assets/image/dr.png")} 
        style={styles.image} 
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
        <Text style={styles.experience}>{experience} Years of experience in Cardiovascular surgery</Text>
        <Text style={styles.rating}>★★★★★ [150+]</Text>
      </View>
      <View style={styles.feeContainer}>
        <Text style={styles.distance}>Distance: {distance}km</Text>
        <Text style={styles.fee}>Fee: Rs. {fee}/-</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorStack')}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.6139, 
          longitude: 77.2090,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: 28.6139, longitude: 77.2090 }} />
      </MapView>

      {/* Doctors List */}
      <ScrollView>
        <DoctorCard 
          name="Dr. Abcde Fghi"
          specialty="Cardiologist/Therapy"
          experience="30+"
          fee="800"
          distance="1"
          navigation={navigation}  // Passing navigation prop explicitly
        />
        <DoctorCard 
          name="Dr. John Doe"
          specialty="Neurologist"
          experience="25+"
          fee="1000"
          distance="3"
          navigation={navigation}  // Passing navigation prop explicitly
        />
        <DoctorCard 
          name="Dr. Jane Smith"
          specialty="Orthopedic"
          experience="15+"
          fee="700"
          distance="2"
          navigation={navigation}  // Passing navigation prop explicitly
        />
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={24} color="#333" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('BookingStack')}>
          <Icon name="bookmark-outline" size={24} color="#333" />
          <Text style={styles.navLabel}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MapStack')}>
          <Icon name="map-outline" size={24} color="#333" />
          <Text style={styles.navLabel}>Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>
          <Icon name="chatbubble-outline" size={24} color="#333" />
          <Text style={styles.navLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={24} color="#333" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    height: 200,
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  specialty: {
    fontStyle: 'italic',
    color: 'gray',
  },
  experience: {
    fontSize: 12,
    color: 'gray',
  },
  rating: {
    color: '#f39c12',
    fontSize: 12,
  },
  feeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  distance: {
    fontSize: 12,
    color: 'gray',
  },
  fee: {
    color: 'green',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 5,
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navText: {
    color: 'gray',
  },
  navTextActive: {
    color: 'green',
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  navItem: { alignItems: "center" },
  navLabel: { fontSize: 12, color: "#333" },
});
