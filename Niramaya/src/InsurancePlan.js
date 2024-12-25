import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const InsurancePlan = ({navigation}) => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const insurancePlans = [
    'HDFC ERGO',
    'Care Health Insurance',
    'Aditya Birla Health Insurance',
    'ICICI Lombard',
    'Others',
    'None',
  ];

  const handleSubmit = () => {
    if (selectedPlan) {
      Alert.alert('Selected Plan', `You have selected: ${selectedPlan}`);
    } else {
      Alert.alert('Error', 'Please select an insurance plan.');
    }
  };

  return (
    <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      <Text style={styles.title}>Insurance Plan</Text>
      <Text style={styles.subtitle}>Select your Insurance Plan</Text>

      {insurancePlans.map((plan, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedPlan === plan && styles.selectedOption,
          ]}
          onPress={() => setSelectedPlan(plan)}
        >
          <View
            style={[
              styles.radioCircle,
              selectedPlan === plan && styles.selectedRadioCircle,
            ]}
          />
          <Text style={styles.optionText}>{plan}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('InsurancePlanStack')}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
    // Header Styles
    header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    borderColor: '#28a745',
    backgroundColor: '#f0fff0',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#28a745',
    marginRight: 10,
  },
  selectedRadioCircle: {
    backgroundColor: '#28a745',
  },
  optionText: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InsurancePlan;