import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to</Text>
        <View style={styles.flexDirection}>
          <Image source={require('../assets/image/Logo.png')} style={styles.Image} />
          <Text style={styles.brandName}>Niramaya</Text>
        </View>
        <Text style={styles.subtitle}>
          Step into a world where wellness meets convenience.
        </Text>
      </View>
      <View style={styles.position}>
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.navigate('AppScreen')}
        >
          <Text style={styles.nextText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 3 ,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: 'center',
      padding:20,
     
      
    },
    card: {
      backgroundColor:'#fff',
      paddingTop:32,
      paddingBottom:32,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      width: 304,
      height:500,
      gap:16,
      position:'relative',
    },
    position:{
      position:'absolute',
      bottom:105,
      
    },
    flexDirection:{
   display:'flex',
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center',
   marginTop:4,
  
    },
    title: {
      fontSize: 48,
      color: 'black',
      fontFamily:'Nunito',
    },
    Image: {
  width:48,
  height:36,
    },
    brandName: {
      fontSize: 48,
      color: 'black',
      fontFamily:'Nunito',
      paddingLeft:8,
    },
    subtitle: {
      fontSize: 18,
      color: '#666',
      textAlign: 'center',
      marginTop: 10,
      fontFamily:'Nunito',
      gap:4,
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
  
  export default OnboardingScreen;