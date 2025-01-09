import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRightContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/Icons.png')} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.skip} onPress={() => navigation.navigate('Join')}>Skip</Text>
      </View>
      <View style={styles.card}>
        <Image source={require('../assets/image/Rectangle 13.png')} style={styles.image} />
        <Text style={styles.heading}>Unlock effortless wellbeing</Text>
        <Text style={styles.description}>
          Experience expert care, hassle-free logistics, and a healthier future.
        </Text>
      </View>
      <View style={styles.position}>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.navigate('Join')}
        >
          <Text style={styles.nextText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      padding:20,
     
      fontFamily:'Nunito',
    },
  topRightContainer: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'flex-end', // Push content to the right
    alignItems: 'center', // Align vertically
    padding: 30, // Add padding around the content
  },
  arrow: {
    height:32,
   width:34,
    marginRight:250,
    marginTop:-60,
  },
  skip: {
    
    fontSize: 18, // Font size for "Skip"
    color: 'black', // Example color for "Skip"
    marginLeft:8, // Space between arrow and "Skip"
    marginTop:-90,
  },
    card: {
      backgroundColor:'#fff', 
      borderRadius: 32,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      width: 320,
      height:545,
      gap:16,
      position:'relative',
    },
  position:{
    position:'absolute',
    bottom:54,
    
  },
  image: {
    width: 230,
    height: 230,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing:0.5,
  },
  headingsub: {
    fontSize: 24,
    letterSpacing:0.5,
    color: '#333',
    textAlign: 'center',
    marginTop:-18,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    width:304,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#CCC',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#67940069',
    width:50,
  },
  arrowButton: {
    marginTop: 20,
    backgroundColor: '#67940069', 
    marginLeft:35,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent:'center',
    alignItems:'center',
    
  },
  nextText: {
    marginTop:-21,
    fontSize: 45,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default MainScreen;