import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const BookingConfirmedScreen = () => {
  const navigation = useNavigation(); // Initialize navigation object

  return (
    <View style={styles.parentView}>
      {/* Back Icon */}
      <TouchableOpacity 
        style={styles.backIconContainer} 
        onPress={() => navigation.goBack()} // Navigate back to the previous screen
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      {/* Search Icon */}
      <TouchableOpacity 
        style={styles.searchIconContainer} 
        onPress={() => navigation.navigate('SearchScreen')} // Replace 'SearchScreen' with the actual screen name you want to navigate to
      >
        <Ionicons name="search-outline" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/image/bgimage.png')} 
          style={styles.image}
        />
      </View>

      {/* Booking Confirmed Heading */}
      <Text style={styles.heading}>Booking Confirmed</Text>
      <Text style={styles.booking1}>Booking ID: 23451</Text>

      {/* Booking Options */}
      <View style={styles.commonStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.childTitle}>Book Cab to ABC Hospital at</Text>
          <TouchableOpacity>
            <Text style={styles.price}>lowest price</Text>
          </TouchableOpacity>
        </View>
        <Ionicons name="arrow-forward-outline" size={24} color="#679400" style={styles.icon} />
      </View>

      <View style={styles.commonStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.childTitle}>Book Hotel near ABC Hospital at</Text>
          <TouchableOpacity>
            <Text style={styles.price}>lowest price</Text>
          </TouchableOpacity>
        </View>
        <Ionicons name="arrow-forward-outline" size={24} color="#679400" style={styles.icon} />
      </View>

      <View style={styles.commonStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.childTitle}>Book Hotel near ABC Hospital at</Text>
          <TouchableOpacity>
            <Text style={styles.price}>lowest price</Text>
          </TouchableOpacity>
        </View>
        <Ionicons name="arrow-forward-outline" size={24} color="#679400" style={styles.icon} />
      </View>

      {/* Go Back to Home */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')} // Navigate to home screen
      >
        <Text style={styles.home}>Go back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  backIconContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },

  imageContainer: {
    borderWidth: 2,
    borderColor: '#679400',
    borderRadius: 100,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  image: {
    width: 90,
    height: 90,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  booking1:{
    fontSize:16,
   }, 
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  price: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#679400',
    marginTop: 4,
  },
  icon: {
    marginRight: 10,
  },
  childTitle: {
    fontSize: 16,
    color: '#000',
  },
  commonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#679400',
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    width: '90%',
    height: 60, 
  },
  home: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#000',
  },
});

export default BookingConfirmedScreen;
