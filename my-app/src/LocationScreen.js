import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal, TextInput } from "react-native";


const LocationScreen = ({ navigation }) => {
  const [manualLocation, setManualLocation] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to handle location submission
  const selectManualLocation = () => {
    if (!manualLocation.trim()) {
      Alert.alert("Error", "Please enter a location.");
      return;
    }
    setModalVisible(false);
    // Pass entered manual location to the MapScreen
    navigation.navigate("LocationStack", {
      location: manualLocation.trim(), // Passing the entered location
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Where are you?</Text>
          <Text style={styles.description}>
            Locate yourself or manually enter your location.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Select Location</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for manual location input */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Enter Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter house, street, city."
              value={manualLocation}
              onChangeText={setManualLocation}
            />
            <TouchableOpacity
              style={styles.modalButton}
              onPress={selectManualLocation} // Submit the location
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)} // Close the modal
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    width: "80%",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  description: { fontSize: 14, textAlign: "center", marginBottom: 20 },
  button: {
    backgroundColor: "#4caf50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  closeButton: {
    alignItems: "center",
  },
  closeButtonText: { color: "#4caf50", fontSize: 14 },
});

export default LocationScreen;
