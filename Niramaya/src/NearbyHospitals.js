import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from "react-native-vector-icons/Ionicons";

const hospitals = [
  {
    id: '1',
   name: 'ABC Hospital',
    specialization: 'Emergency/Surgery/Doctors',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '★★★★★',
    reviews: '150+',
    distance: '1 km',
    image: require('../assets/image/image1.png'), // Local image
  },
  {
    id: '2',
    name: 'EFG Hospital',
    specialization: 'Emergency/Surgery/Doctors',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '★★★★★',
    reviews: '150+',
    distance: '1 km',
    image: require('../assets/image/image2.png'), // Local image
  },
  {
    id: '3',
    name: 'Victoria MED Centre',
    specialization: 'Emergency/Surgery/Doctors',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '★★★★★',
    reviews: '150+',
    distance: '1 km',
    image: require('../assets/image/image3.png'), // Local image
  },
];

const NearbyHospitals = ({ navigation,name,specialty, experience, fee, distance }) => {
  const renderHospital = ({ item }) => (
    <View style={styles.hospitalCard}>
      {/* Render local images correctly */}
      <Image source={item.image} style={styles.hospitalImage} />
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

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {hospitals.map((hospital, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: 37.78825 + index * 0.002, 
              longitude: -122.4324 + index * 0.002,
            }}
            title={hospital.name}
          />
        ))}
      </MapView>

      {/* List of Hospitals */}
      <FlatList
        data={hospitals}
        renderItem={renderHospital}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '40%',
    width: '100%',
  },
  list: {
    padding: 10,
  },
  hospitalCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  hospitalImage: {
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

export default NearbyHospitals;
