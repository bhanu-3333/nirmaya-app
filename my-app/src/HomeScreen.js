import React ,{useState} from 'react';
import {  ScrollView,View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import Icon from "react-native-vector-icons/Ionicons";



export default function HomeScreen({ navigation }) {
   const [liked, setLiked] = useState(false);
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
              <View style={styles.iconButton}>
                <Image source={require('../assets/image/book.png')} style={styles.iconButtonimage}/>
              </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
              <Ionicons name="search-outline" size={15} color="gray" style={styles.searchIcon} />
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
              <TouchableOpacity onPress={() => navigation.navigate("Categories")} style={styles.flexrow}>
                <Text>See All </Text>
                <Image source={require('../assets/image/graterthan.png')} style={styles.graterImage}/>
                
              </TouchableOpacity>
            </View>

            <View style={styles.categories}>
             {[
             { name: 'Neurologist', image: require('../assets/image/Neurology.png') },
             { name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
             { name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
             { name: 'Dentist', image: require('../assets/image/Dentist.png') },
             ].map((category, index) => (
              <View key={index} style={styles.category}>
                <View style={styles.categoryImage}>
                  <Image source={category.image} style={{ width: 30, height: 30   }} />
                </View>
                <Text style={styles.categoryText}>{category.name}</Text>
              </View>
             ))}
             
            </View>

             
            <View style={styles.sectionHeader}>
              <Text style={styles.username} >Services</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Services")} style={styles.flexrow}>
                <Text style={styles.seeallText}>See All </Text>
                <Image source={require('../assets/image/graterthan.png')} style={styles.graterImage}/>
                
              </TouchableOpacity>

            </View>
            <View style={styles.services}>

                    <TouchableOpacity
                              style={styles.likeButton}
                              onPress={() => setLiked(!liked)}
                            >
                              <Icon
                                 name={liked ? 'heart' : 'heart-outline'}
                                size={32} 
                                color="#FF0000" 
                              />
                            </TouchableOpacity>
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
    marginRight: 19,
  },
  headerText: {
    
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
  flexrow:{
   display:'flex',
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center',
  },
  graterImage:{
    height:15,
    width:10,
  },
  iconButton: {
    marginLeft: 'auto',
    height:65,
    width:65,
    borderWidth:1,
    borderColor:'black',
    borderRadius:50,
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center',
      },
  iconButtonimage:{
    height:29.68,
    width:29.68,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    background:'transparent',
    padding: 7,
    borderRadius: 10,
    marginBottom: 16,
    boxShadow: '0px 2px 5px 0px #00000040',

  },
  searchIcon: {
    marginRight: 8,
    color: 'gray',
  },
  searchInput: {
    flex:1,
    borderWidth: 0,
    
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#679400',
    padding:10,
    paddingBottom:0,
    borderRadius: 15,
    marginBottom: 16,
  },
  sub: {
    position:'relative',
    marginLeft:-25,
  },
  headerText:{
    width:170,
    fontSize:24,
    fontFamily:'Duplet',
    color:'white',
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
    position:'absolute',
    
  },
  appointmentButton: {
    backgroundColor: '#fff',
    paddingVertical: 9,
    paddingHorizontal:5,
    borderRadius: 9,
    marginTop: 8,
    textAlign: 'center',
    fontSize:10.09,
    fontFamily:'Montserrat',
  },
  sectionHeader: {
    fontSize: 36,
    fontFamily:'poppins',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: -6,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:-10,
  },
  seeallText:{
    fontFamily:'Duplet',
  },
  category: {
    alignItems: 'center',
    marginBottom:20,
  },
  categoryImage:{
   height:60,
   width:60,
   backgroundColor: '#D9D9D9', 
   borderRadius:60,
   justifyContent:'center',
   alignItems:'center',
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    fontFamily:'Duplet',
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily:'Duplet',
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
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10, 
    padding: 6,
    elevation: 3,
    zIndex: 1, 
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
    width:370,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor:'#E0E0E0',
    borderBottomWidth:0,
    borderRadius:20,
    marginTop:35,
    flexShrink:0,
    marginLeft:-20,
  },
  navItem: { alignItems: "center" },
  navLabel: { fontSize: 12, color: "#333", fontFamily:'roboto' },
});