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
          <Text style={styles.title}>Find Your Doctor</Text>
          <TouchableOpacity>
            <Icon name="search-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Filters */}
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButtonActive}>
            <Text style={styles.filterTextActive}>Experience</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Most Qualified</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Fee</Text>
          </TouchableOpacity>
        </View>

        {/* Selected Category */}
        <View style={styles.selectedCategory}>
          <Icon name="heart-outline" size={24} color="#4CAF50" />
          <Text style={styles.selectedText}>Cardiologist</Text>
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
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  scrollContainer: { flex: 1 },

  // Header Styles
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#FFF",
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#333" },

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
    borderRadius: 16,
    marginHorizontal: 5,
  },
  filterButtonActive: {
    backgroundColor: "#4CAF50",
    padding: 8,
    borderRadius: 16,
    marginHorizontal: 5,
  },
  filterText: { color: "#666" },
  filterTextActive: { color: "#FFF" },

  // Selected Category Styles
  selectedCategory: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF",
  },
  selectedText: { marginLeft: 10, fontSize: 16, color: "#333" },

  // Doctor List Styles
  list: { padding: 16 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold", color: "#333" },
  specialization: { fontSize: 14, color: "#666" },
  experience: { fontSize: 12, color: "#666" },
  rating: { fontSize: 12, color: "#FFD700" },

  action: { alignItems: "flex-end" },
  fee: { fontSize: 16, fontWeight: "bold", color: "#333", marginBottom: 5 },
  bookButtonText: {
    backgroundColor: "#4CAF50",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  // Bottom Navigation Styles
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  navItem: { alignItems: "center" },
  navLabel: { fontSize: 12, color: "#333" },
});

export default DoctorList;