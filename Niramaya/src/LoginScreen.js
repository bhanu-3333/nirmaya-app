import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Login Successful', `Welcome ${username}`);  
    } else {
      Alert.alert('Error', 'Please fill in both fields');
    }
  };

  return (
    <View style={styles.container}>
        
        <View>
          <Image source={require('../assets/image/Niramaya.png')} style={styles.logo}/>
        </View>
      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#777"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#777"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Navigation */}
      <TouchableOpacity >
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={{ color: '#2C6E49' }}  onPress={() => navigation.navigate('SignupStack')}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAF8',
    padding: 20,
  },
  logo:{
     width:243.22,
     height:159,
  },

 
  subtitle: {
    fontSize: 12,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    color: '#333',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#2C6E49',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#777',
  },
});

export default LoginScreen;
