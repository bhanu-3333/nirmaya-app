import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Ensure you've installed this library

// Dummy data for doctors
const doctors = Array(7).fill({
  id: 1,
  name: "Dr. Abcde Fghi",
  specialization: "Cardiologist/Therapy",
  experience: "30+ Years of experience in Cardiovascular surgery",
  rating: "⭐ ⭐ ⭐ ⭐ ⭐ [150+]",
  fee: "Rs. 800/-",
});

const DoctorList = ({ navigation }) => {
  const renderDoctor = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={require("../assets/image/dr.png")} 
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
        <Text style={styles.experience}>{item.experience}</Text>
        <Text style={styles.rating}>{item.rating}</Text>
      </View>
      <View style={styles.action}>
        <Text style={styles.fee}>{item.fee}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DoctorStack')}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Find Your Doctor</Text>

        {/* Filters */}
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButtonActive}>
            <Text style={styles.filterTextActive}>Experience</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Most Qualified</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButtonfee}>
            <Text style={styles.filterText}>Fee</Text>
          </TouchableOpacity>
        </View>

        {/* Selected Category */}
        <View style={styles.selectedCategory}>
          <Text style={styles.selectedText}>Selected Cardiologist:</Text>
          <Image source={ require('../assets/image/Group12.png')} style={styles.groupimage}/>
        </View>

        {/* Doctor List */}
        <FlatList
          data={doctors}
          renderItem={renderDoctor}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
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
  container: { flex: 1, backgroundColor: "#FFF" },
  scrollContainer: { flex: 1 },
  

  // Header Styles
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#FFF",
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#333",  justifyContent:'center',
    alignSelf:'center',
  },

  // Filter Styles
  filters: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#FFF",
  },
  filterButton: {
    backgroundColor: "#E0E0E0",
    padding: 8,
    borderRadius: 21,
    width:121,
    marginHorizontal: 5,
    justifyContent:'center',
    alignItems:'center',
  },
  filterButtonfee: {
    backgroundColor: "#E0E0E0",
    padding: 8,
    borderRadius: 21,
    width:70,
    marginHorizontal: 5,
    justifyContent:'center',
    alignItems:'center',
  },
  

  filterButtonActive: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 21,
    marginHorizontal: 5,
    alignItems:'center',
    width:121,

  },
  filterText: { color: "#666" },
  filterTextActive: { color: "#FFF" },

  
  selectedCategory: {
    display:'flex',
    flexDirection: "row",
    justifyContent:'center',
    alignSelf: 'center',
    alignItems:'center',
    backgroundColor: "#FFF",
    width:243,
  },
  selectedText: { marginLeft: 10, fontSize: 20, color: "#333" ,fontWeight:'bold', },
  groupimage:{
    height:51,
    width:39,
  },

 
  list: { padding: 16 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 16,
    borderWidth:1,
    borderColor:'#E0E0E0',
    width:360,
   marginLeft:-15,
  },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold", color: "#333" },
  specialization: { fontSize: 14, color: "#666" },
  experience: { fontSize: 12, color: "#666" },
  rating: { fontSize: 12, color: "#FFD700" },

  action: { alignItems: "flex-end" },
  fee: { fontSize: 16, fontWeight: "bold", color: "green", marginBottom: 5 },
  bookButtonText: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 18.89,
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },

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

export default DoctorList;