import React from 'react';
import {  ScrollView,View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import Icon from "react-native-vector-icons/Ionicons";


export default function HomeScreen({ navigation }) {
  return (
    <View>
    <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
              <Image
                source={require('../assets/image/profile.png')}
                style={styles.avatar}
              />
              <View style={styles.headerText}>
                <Text style={styles.greeting}>Hi,</Text>
                <Text style={styles.username}>Person One</Text>
              </View>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="document-text-outline" size={24} color="green" />
              </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
              <Ionicons name="search-outline" size={20} color="gray" style={styles.searchIcon} />
              <TextInput placeholder="Search anything" style={styles.searchInput} />
            </View>

            {/* Appointment Banner */}
            <View style={styles.banner}>
              <View style={styles.sub}>
                <Image
                  source={require('../assets/image/Mdoc.png')}
                  style={styles.bannerImage}
                />
              </View>
              <View style={styles.bannerText}>
                <Text style={styles.headerText}>Looking for desired doctor?</Text>
                <TouchableOpacity>
                  <Text style={styles.appointmentButton}>Book an appointment</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Categories Section */}
            <View style={styles.sectionHeader}>
              <Text style={styles.username}>Categories</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
                <Text style={{ color: "green" }}>See All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.categories}>
              {[
                { name: 'Neurologist', icon: 'brain' },
                { name: 'Cardiologist', icon: 'heart' },
                { name: 'Dermatologist', icon: 'user-alt' },
                { name: 'Dentist', icon: 'tooth' },
              ].map((category, index) => (
                <View key={index} style={styles.category}>
                  <FontAwesome5 name={category.icon} size={24} color="green" />
                  <Text style={styles.categoryText}>{category.name}</Text>
                </View>
              ))}
            </View>
             
            <View style={styles.sectionHeader}>
              <Text style={styles.username} >Services</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Services")}>
                 <Text style={{ color: "green" }}>See All</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.services}>
              {[
                { name: ' ⭐ ⭐ ⭐ ⭐ ⭐ Locate & Book Cabs', image: 'https://i.imgur.com/c9WVtb8.png' ,
                icon: require('../assets/image/Group 5.png')},
                { name: '⭐ ⭐ ⭐ ⭐ ⭐ Book Your First Appointment', image: 'https://i.imgur.com/8oHwDwY.png', icon: require('../assets/image/Group 5.png') },
              ].map((service, index) => (
                <View key={index} style={styles.service}>
                  <Image source={{ uri: service.image }} style={styles.serviceImage} />
                  <Text style={styles.serviceText}>{service.name}</Text>
                </View>
              ))}
            </View>
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
   
    </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerText: {
    marginLeft: 8,
    flexDirection: 'row',
  },
  greeting: {
    fontSize: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  iconButton: {
    marginLeft: 'auto',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
    color: 'gray',
  },
  searchInput: {
    flex: 1,
    borderWidth: 0,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#679400',
    padding:10,
    paddingBottom:0,
    borderRadius: 8,
    marginBottom: 16,
  },
  sub: {
    position:'relative',
  },
  headerText:{
    fontSize:13,
  },
  bannerImage: {
    width: 300,
    height: 150,
    borderRadius: 8,
  },
  bannerText: {
    right:10,
    top:30,
    justifyContent: 'center',
    position:'absolute'
  },
  appointmentButton: {
    backgroundColor: '#fff',
    paddingVertical: 9,
    paddingHorizontal:5,
    borderRadius: 8,
    marginTop: 8,
    textAlign: 'center',
    fontSize:10.59,
  },
  sectionHeader: {
    fontSize: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 6,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    alignItems: 'center',
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  service: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    overflow: 'hidden',
    width: '48%',
   
  },
  serviceImage: {
    width: '100%',
    height: 100,
  },
  serviceText: {
    padding: 8,
    fontSize: 14,
    fontWeight:'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
 navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    marginTop:60,
    flexShrink:0,
  },
  navItem: { alignItems: "center" },
  navLabel: { fontSize: 12, color: "#333" },
});