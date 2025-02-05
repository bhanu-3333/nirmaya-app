import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

const AppScreen = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: '1', label: 'Flights' },
    { id: '2', label: 'Hospitals' },
    { id: '3', label: 'Doctors' },
    { id: '4', label: 'Cabs' },
  ];

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRightContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/Icons.png')} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.skip} onPress={() => navigation.navigate('Main')}>Skip</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Let’s take the first step together</Text>
        <Text style={styles.subtitle}>What are you looking for?</Text>
        <FlatList
          data={options}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === item.id && styles.selectedOption,
              ]}
              onPress={() => handleSelect(item.id)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === item.id && styles.selectedOptionText,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.position}>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.navigate('Main')}
        >
         <Image source={require('../assets/image/arrow.png')} style={styles.nextText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3 ,
    backgroundColor: '#0000001A',
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
   fontFamily:'Nunito',
    
  },
topRightContainer: {
  display:'flex',
  flexDirection: 'row',
  alignItems: 'center', 
 marginTop:-90,
 padding:30,
  
},
arrow: {
  height:32,
   width:34,
   display:'block',
   marginRight:255,
   marginLeft:-10,  
},
skip: {

  fontSize: 18,
  color: 'black', 
  
},
  card: {
    backgroundColor:'#fff',
    paddingTop:80,
    
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    width: 320,
    height:560,
    gap:16,
    position:'relative',
  },
position:{
  position:'absolute',
  bottom:75,
  
},
title: {
  fontSize: 16,
  fontWeight: '600',
  color: '#000',
  textAlign: 'center',
  marginBottom: 10,
  marginTop:-20,
},
subtitle: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#000',
  textAlign: 'center',
  marginTop:-20,
},


option: {
  backgroundColor: '#FFF',
  gap:12,
  padding: 16,
  borderRadius: 32,
  marginBottom: 15,
  
  borderWidth: 1,
  width:288,
  borderColor: '#DADADA',
},
selectedOption: {
  borderColor: '#8DBF7C',
  backgroundColor: '#EAF4EA',
},
optionText: {
  fontSize: 18,
  textAlign: 'center',
  color: '#000',
},
selectedOptionText: {
  color: '#4CAF50',
  fontWeight: 'bold',
},
pagination: {
  flexDirection: 'row',
  marginTop: 20,
},
dot: {
  height: 8,
  width: 10,
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
  height:32,
  width:32,
  color: '#FFFFFF',
  marginBottom:3,
 

},

});

export default AppScreen;