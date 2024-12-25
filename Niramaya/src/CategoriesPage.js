import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

const categories = [
  { id: '1', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '2', name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
  { id: '3', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '4', name: 'Dentist', image: require('../assets/image/Dentist.png') },
  { id: '5', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '6', name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
  { id: '7', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '8', name: 'Dentist', image: require('../assets/image/Dentist.png') },
  { id: '9', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '10', name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
  { id: '11', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '12', name: 'Dentist', image: require('../assets/image/Dentist.png') },
  { id: '13', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '14', name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
  { id: '15', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '16', name: 'Dentist', image: require('../assets/image/Dentist.png') },
  { id: '17', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '18', name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
  { id: '19', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '20', name: 'Dentist', image: require('../assets/image/Dentist.png') },
];

export default function CategoriesPage() {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardBg}>
        <Image source={item.image} style={styles.icon} />
      </View>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleSearchPress = () => {
    console.log("Search button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconRow}> 
        <TouchableWithoutFeedback onPress={handleSearchPress}>
          <Ionicons name="search" size={24} color="#333" style={styles.iconButton} />
        </TouchableWithoutFeedback>
      </View>

      <FlatList
        data={categories}
        numColumns={4} 
        keyExtractor={(item) => item.id}  // Ensure unique key for each item
        renderItem={renderCategory}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  iconButton: {
    padding: 8,
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 65,
    height: 80,
    margin: 8,
    padding: 10,
    alignItems: 'center',
  },
  cardBg: {
    backgroundColor:'#D9D9D9',
    borderRadius:60,
    width: 60,
    height: 60,
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  text: {
    fontSize: 7,
    fontWeight: "700",
    color: "black",
    textAlign: "center",
  },
});
