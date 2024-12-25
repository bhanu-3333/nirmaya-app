import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


const BookingConfirmedScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.checkMark}>
          <Text style={styles.checkMarkText}>✔</Text>
        </View>
      </View>
      <Text style={styles.title}>Booking Confirmed</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>
          Book Cab to ABC Hospital at{' '}
          <Text style={styles.linkText}>lowest price</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>
          Book Hotel near ABC Hospital at{' '}
          <Text style={styles.linkText}>lowest price</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>
          Book Hotel near ABC Hospital at{' '}
          <Text style={styles.linkText}>lowest price</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
        <Text style={styles.backText}  >Go back to home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  iconContainer: {
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    backgroundColor: '#4CAF50',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMarkText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  card: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18.57,
    color: '#000',
  },
  linkText: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize:18.57,
  },
  backText: {
    color: '#4CAF50',
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default BookingConfirmedScreen;