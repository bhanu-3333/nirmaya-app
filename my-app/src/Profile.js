import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/image/dr.png')}
            style={styles.image}
          />
          <View style={styles.columns}>
            <Text style={styles.name}>Dr. Abcde Fghi</Text>
            <Text style={styles.specialization}>Cardiologist/Therapy</Text>
            <View style={styles.experienceSub}>
              <Text style={styles.experience}>30+ Years of experience in Cardiovascular surgery</Text>
            </View>
            <Text style={styles.rating}>⭐ ⭐ ⭐ ⭐ ⭐ [150+]</Text>
          </View>
        </View>

        {/* Tags Section */}
        <Text style={styles.tags}>Tags</Text>
        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>Cardiology</Text>
          <Text style={styles.tag}>Surgery</Text>
          <Text style={styles.tag}>Therapy</Text>
        </View>

        {/* Biography Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Biography:</Text>
          <Text style={styles.text}>
            A doctor's biography can include their professional experience, achievements, and areas
            of specialization. A doctor’s biography can also include personal information, such as
            their interests and hobbies.
          </Text>
          <Text style={styles.readMore}>Read more</Text>
        </View>

        {/* Working Hours Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Working Hours:</Text>
          <Text style={styles.text}>Mon-Fri: 8:00 am - 6:00 pm</Text>
          <Text style={styles.text}>Sat-Sun: 9:00 am - 5:00 pm</Text>
        </View>

        {/* Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details:</Text>
          <Text style={styles.text}>Hospital/Clinic: ABC Hospital</Text>
          <Text style={styles.text}>Specialization: Cardiology</Text>
          <Text style={styles.text}>Years of Experience: 30+ in cardio</Text>
          <Text style={styles.text}>Phone Number: +91 00000 00000</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.fee}>Fee: Rs. 800/-</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileStack')} style={styles.button}>
            <Text style={styles.buttonText}>Book an appointment</Text>
          </TouchableOpacity>
        </View>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the screen
    backgroundColor: '#F8F8F8',
  },
  scrollContent: {
    paddingBottom: 100, // Provide space for the bottom navbar
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFF',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    marginLeft: 19,
    marginTop: 20,
  },
  columns: {
    marginLeft: 19,
  },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  name: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  specialization: { fontSize: 16.12, color: '#666' },
  experience: { fontSize: 15.12, color: '#666', marginVertical: 5 },
  experienceSub: { width: 194 },
  rating: { fontSize: 13.6, color: '#FFD700' },
  tags: { marginLeft: 19 },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: -5,
  },
  tag: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 16,
    marginHorizontal: 5,
    fontSize: 14,
  },
  section: { marginVertical: 10, marginLeft: 19 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  text: { fontSize: 15.12, color: '#666', marginVertical: 2 },
  readMore: { fontSize: 14, color: '#007BFF' },
  footer: { alignItems: 'center', marginTop: 2 },
  fee: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: { alignItems: 'center' },
  navLabel: { fontSize: 12, color: '#333' },
});

export default Profile;
