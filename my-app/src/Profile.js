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
        <Text style={styles.tags}>Tags:</Text>
        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>Cardiology</Text>
          <Text style={styles.tag}>Surgery</Text>
          <Text style={styles.tag}>Therapy</Text>
        </View>
          

        {/* Biography Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About The Doctor:</Text>
          <Text style={styles.text}>
            A doctor's biography can include their professional experience, achievements, and areas
            of specialization. A doctor’s biography can also include personal information, such as
            their interests and hobbies.
          </Text>
        </View>
        <View style={styles.iconsRow}>
                <TouchableOpacity onPress={() => navigation.navigate('AditionStack')} >
                  <View style={styles.touch}>
                    <Image style={styles.line}  source={require('../assets/image/Line28.png')}/>
                    <Image  style={styles.imagecontent} source={require("../assets/image/education.png")}/>
                  </View>
                  <View style={styles.icontext}>
                    <Text style={styles.icon}> Education</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity >
                  <View style={styles.touch}>
                    <Image style={styles.linein}  source={require('../assets/image/Line28.png')}/>
                    <Image  style={styles.imagecontent} source={require("../assets/image/awards.png")}/>
                  </View>
                  <View style={styles.icontext}>
                    <Text style={styles.icon}> Awards</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity >
                  <View style={styles.touch}>
                    <Image style={styles.linein}  source={require('../assets/image/Line28.png')}/>
                    <Image  style={styles.imagecontent} source={require("../assets/image/surgeries.png")}/>
                  </View>
                  <View style={styles.icontext}>
                   <Text style={styles.icon}>Surgeries</Text>
                  </View>
                </TouchableOpacity>
               <TouchableOpacity >
                  <View style={styles.touch}>
                    <Image style={styles.linein}  source={require('../assets/image/Line28.png')}/>
                    <Image  style={styles.imagecontent} source={require("../assets/image/reviews.png")}/>
                    <Image style={styles.line}  source={require('../assets/image/Line28.png')}/>
                  </View>
                  <View style={styles.icontext}>
                   <Text style={styles.icon}> Reviews</Text>
                  </View>
                </TouchableOpacity>
          </View>

        {/* Working Hours Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Working Hours:</Text>
          <View style={styles.innertext}>
             <Text style={styles.text}>Mon-Fri:  </Text>
            <Text style={styles.textline}>8:00 am - 6:00 pm</Text>
          </View> 
          <View style={styles.innertext}>
            <Text style={styles.text}>Sat-Sun:</Text>
            <Text style={styles.textline}> 9:00 am - 5:00 pm</Text>
          </View>
        </View>

        {/* Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details:</Text>
          <View style={styles.innertext}>
            <Text style={styles.text}>Hospital/Clinic:</Text>
            <Text style={styles.textline}> ABC Hospital</Text>
          </View>
          <View style={styles.innertext}>
            <Text style={styles.text}>Specialization:</Text>
            <Text style={styles.textline}> Cardiology</Text>
          </View>
          <View style={styles.innertext}>
            <Text style={styles.text}>Years of Experience:</Text>
            <Text style={styles.textline}>30+ in cardio</Text>
          </View>
          <View style={styles.innertext}>
            <Text style={styles.text}>Phone Number:</Text>
            <Text style={styles.textline}> +91 00000 00000</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.feese}>
            <Text style={styles.fee}>Fee:</Text>
            <Text style={styles.feetext}> Rs. 800/-</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileStack')} style={styles.button}>
            <Text style={styles.buttonText}>Book an appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 100, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
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
  name: { fontSize: 28, fontWeight: 'bold', color: '#333' ,fontFamily:'Poppins', },
  specialization: { fontSize: 16.12, color: '#000000' , fontFamily:'Poppins',},
  experience: { fontSize: 13.12, color: '#666', marginVertical: 5   , fontFamily:'Poppins',},
  experienceSub: { width: 194 },
  rating: { fontSize: 13.6, color: '#FFD700' },
  tags: { marginLeft: 19 ,fontSize:16,fontFamily:'Montserrat',  fontWeight: 'bold', },
  tagsContainer: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf:'center' ,
    alignItems:'center',
    marginTop: 5,
  },
  tag: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 16,
    marginHorizontal: 5,
    fontSize: 13,
    width:105,
    fontFamily:'Montserrat',
  },

  iconsRow: {
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  marginTop:-30,
  },
  touch:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  },
  line:{
    width:30,
    marginHorizontal:10,
    marginTop:30,
    height:2,
  },
  linein:{
    width:40,
    marginHorizontal:10,
    marginTop:30,
    height:2,
  },
  imagecontent:{
    height:40,
    width:40,
    marginTop:30,
    marginLeft:-10,
    marginRight:-10,
  },
  icontext:{
    display:'flex',
    justifyContent:'space-between',
    alignContent:'space-between',
    alignItems:'center',
    
  },
  icon: {
    fontSize: 14,
    color: 'gray',
    marginRight:-10,
  },
  
  section: { marginVertical: 10, marginLeft: 19 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' ,fontFamily:'Montserrat', },
  innertext:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:15,
  },
  text: { fontSize: 14.12, color: '#A09E9E', marginVertical: 2,fontFamily:'Poppins', },
  footer: { alignItems: 'center', marginTop: 2 },
  feese:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  fee: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  feetext:{
   color:'green',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 18,
  },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
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

export default Profile;
