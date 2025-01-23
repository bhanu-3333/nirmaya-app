import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const hospitals = [
  {
    id: '1',
    name: 'ABC Hospital',
    services: 'Emergency/Surgery/Doctors',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '★★★★★',
    reviews: '150+',
    logos: [
      require('../assets/image/icic.png'), 
      require('../assets/image/hdfc.png'), 
    ],
  },
  {
    id: '2',
    name: 'ABC Hospital',
    services: 'Emergency/Surgery/Doctors',
    experience: '20+ Years of experience in General Surgery',
    rating: '★★★★☆',
    reviews: '100+',
    logos: [
      require('../assets/image/icic.png'),
      require('../assets/image/hdfc.png'),
    ],
  },
  {
    id: '3',
    name: 'ABC Hospital',
    services: 'Emergency/Surgery/Doctors',
    experience: '15+ Years of experience in Pediatric Surgery',
    rating: '★★★★☆',
    reviews: '120+',
    logos: [
      require('../assets/image/icic.png'),
      require('../assets/image/hdfc.png'),
    ],
  },
  {
    id: '4',
    name: 'ABC Hospital',
    services: 'Emergency/Surgery/Doctors',
    experience: '25+ Years of experience in Neurology',
    rating: '★★★★★',
    reviews: '200+',
    logos: [
      require('../assets/image/icic.png'),
      require('../assets/image/hdfc.png'),
    ],
  },
];

const HospitalCard = ({ hospital, navigation }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.leftSection}>
        {/* Replace this line with a local hospital image */}
        <Image
          style={styles.hospitalImage}
          source={require('../assets/image/image1.png')} // Replace with your local image
        />
        <View style={styles.details}>
          <Text style={styles.hospitalName}>{hospital.name}</Text>
          <Text style={styles.services}>{hospital.services}</Text>
          <Text style={styles.experience}>{hospital.experience}</Text>
          <Text style={styles.rating}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.star}>★</Text>
            <Text style={styles.star}>★</Text>
            <Text style={styles.star}>★</Text>
            <Text style={styles.star}>★</Text>
            <Text style={styles.reviews}> ({hospital.reviews})</Text>
          </Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.logoRow}>
          {hospital.logos.map((logo, index) => (
            <Image key={index} style={styles.logo} source={logo} />
          ))}
        </View>
        <TouchableOpacity 
          style={styles.bookButton} 
          onPress={() => navigation.navigate('InsurancePlanStack')}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.cardActions}>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Get Directions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Contact the Place</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const InsurancePlanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Back and Search Icons */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={()=> navigation.goBack() }>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Insurance Plan</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>
        Select Hospital according to your Insurance Plan
      </Text>
      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HospitalCard hospital={item} navigation={navigation} />}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/image/house.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('BookingStack')}>
          <Image
            source={require('../assets/image/books.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navButtonText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MapStack')}>
          <Image
            source={require('../assets/image/location.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navButtonText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Chat')}>
          <Image
            source={require('../assets/image/message.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navButtonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/image/photo.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60, // Add padding to push content down below the header
  },
  header: {
    position: 'absolute', // Make header fixed at the top
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    zIndex: 1, // Ensure header is above other content
    paddingTop: 10, // Add padding to prevent overlap with status bar
  },
  iconButton: {
    padding: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50, // Fixed typo
  },
  subtitle: {
    fontSize: 15,
    marginLeft:23,
    marginTop:50,
    marginBottom: 50,
    width: '390',
    fontWeight: 'semibold',
    color: 'black',
  },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 8,
  },
  leftSection: {
    flex: 2,
    flexDirection: 'row',
  },
  rightSection: {
    flex: 1,
    alignItems: 'center',
  },
  hospitalImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  details: {
    justifyContent: 'space-between',
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  services: {
    fontSize: 11,
    color: '#000000',
  },
  experience: {
    fontSize: 10,
    color: '#000000',
    width: '129',
  },
  rating: {
    fontSize: 14,
    color: '#000',
  },
  reviews: {
    color: '#666',
  },
  star: {
    color: '#E2A01D', // Make stars yellow
  },
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  logo: {
    width: 30,
    height: 40,
    resizeMode: 'contain',
    marginVertical: 5,
    marginRight: 8,
    marginLeft: 8,
  },
  bookButton: {
    marginTop: 5,
    backgroundColor: '#679400',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  actionButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    backgroundColor: '#A09E9E',
  },
  actionButtonText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  navButtonText: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
  },
});

export default InsurancePlanScreen;
