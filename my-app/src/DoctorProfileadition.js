import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const DoctorProfileadition = () => {
  return (
    <View style={styles.container}>
     <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('../assets/image/dr.png')} 
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Dr. Abcde Fghi</Text>
          <Text style={styles.specialization}>Cardiologist/Therapy</Text>
          <Text style={styles.experience}>30+ Years of experience in Cardiovascular surgery</Text>
          <Text style={styles.rating}>⭐ 150+ Reviews</Text>
        </View>
      </View>

      {/* Tags Section */}
      <View style={styles.tags}>
        <Text style={styles.tag}>Cardiology</Text>
        <Text style={styles.tag}>Surgery</Text>
        <Text style={styles.tag}>Therapy</Text>
      </View>

      {/* About Section */}
      <Text style={styles.sectionTitle}>About The Doctor:</Text>
      <Text style={styles.description}>
        A doctor's biography can include their professional experience, achievements, and areas of specialization. A doctor's biography can also include personal information, such as their interests and hobbies.
      </Text>

      {/* Icons Section */}
      <View style={styles.iconsRow}>
        <View>
            <Image  style={styles.image} source={require("../assets/image/education2.png")}/>
            <Text style={styles.icon}> Education</Text>
        </View>
        <View>
          <Image  style={styles.image} source={require("../assets/image/awards.png")}/>
          <Text style={styles.icon}> Awards</Text>
        </View>
        <View>
           <Image  style={styles.image} source={require("../assets/image/surgeries.png")}/>
           <Text style={styles.icon}>Surgeries</Text>
        </View>
        <View>
          <Image  style={styles.image} source={require("../assets/image/reviews.png")}/>
          <Text style={styles.icon}> Reviews</Text>
        </View>
      </View>

      {/* Education Section */}
      <Text style={styles.sectionTitle}>Education:</Text>
      <View style={styles.education}>
        <Text>RTS Medical College & Research Center</Text>
        <Text>MD Cardiology</Text>
        <Text>20XX-20XX</Text>
      </View>
      <View style={styles.education}>
        <Text>RTS Medical College & Research Center</Text>
        <Text>MBBS</Text>
        <Text>20XX-20XX</Text>
      </View>

      {/* Awards Section */}
      <Text style={styles.sectionTitle}>Awards:</Text>
      <View style={styles.awards}>
        <Text>• Award for best intern at XYZ Hospital, Dehradun</Text>
        <Text>• Gold Medal for Heart Surgery at XYZ Hospital</Text>
        <Text>• MD Cardiology Gold Medalist</Text>
      </View>

      {/* Procedures Section */}
      <Text style={styles.sectionTitle}>Procedures:</Text>
      <View style={styles.procedures}>
        <Text>✔️ Coronary angioplasty and stent implantation</Text>
        <Text>✔️ Thrombolytic Therapy</Text>
        <Text>✔️ Artificial pacemaker surgery</Text>
        <Text>✔️ Heart valve surgery</Text>
      </View>

      {/* Working Hours Section */}
      <Text style={styles.sectionTitle}>Working Hours:</Text>
      <Text>Mon-Fri: 8:00 am - 6:00 pm</Text>
      <Text>Sat-Sun: 9:00 am - 5:00 pm</Text>

      {/* Details Section */}
      <Text style={styles.sectionTitle}>Details:</Text>
      <Text>Hospital/Clinic: <Text style={styles.inner}>ABC Hospital</Text></Text>
      <Text>Specialization: <Text style={styles.inner}> Cardiology</Text> Cardiology</Text>
      <Text>Years of Experience: <Text style={styles.inner}>30+ in cardio</Text> </Text>
      <Text>Phone Number: <Text style={styles.inner}>+91 00000 00000</Text> </Text>

      {/* Fee Section */}
      <Text style={styles.fee}>Fee: Rs. 800/-</Text>

      {/* Book Appointment Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book an appointment</Text>
      </TouchableOpacity>
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
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: 16,
    color: 'gray',
  },
  experience: {
    fontSize: 14,
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    marginTop: 4,
  },
  tags: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inner:{
   textAlign:'right',
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image:{
    height:40,
    width:40,
  },
  icon: {
    fontSize: 14,
    color: 'gray',
  },
  education: {
    marginBottom: 10,
  },
  awards: {
    marginBottom: 20,
  },
  procedures: {
    marginBottom: 20,
  },
  fee: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom:80,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
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

export default DoctorProfileadition;