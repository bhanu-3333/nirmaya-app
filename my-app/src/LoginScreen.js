import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.ImageBackground}>
        <ImageBackground source={require('../assets/image/bg1.png')} style={styles.ImageBackground}></ImageBackground>
      </View>
      <View style={styles.arrow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/Icons.png')} style={styles.arrow} />
        </TouchableOpacity> 
      </View>
      <View>
        <Image source={require('../assets/image/Niramaya.png')} style={styles.logo} />
      </View>

      {/* Username Input */}
      <Text style={styles.inputtext}>Username</Text>
      <View style={styles.inputflex}>
        <Image source={require('../assets/image/graterthan.png')} style={styles.inputimage} />
        <TextInput
          style={styles.input}
          placeholder="Sample1_00"
          placeholderTextColor="#777"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      
      {/* Password Input */}
      <Text style={styles.inputtext}>Password</Text>
      <View style={styles.inputflex}>
        <Image source={require('../assets/image/graterthan.png')} style={styles.inputimage} />
        <TextInput
          style={styles.input}
          placeholder="Sample1_00"
          placeholderTextColor="#777"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.boxforgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SignupStack')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Navigation */}
      <View>
        <ImageBackground source={require('../assets/image/bg2.png')} style={styles.ImageBackground1}></ImageBackground>
      </View>
      
      <TouchableOpacity style={styles.boxsignupText}>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={{ color: '#2C6E49' }} onPress={() => navigation.navigate('SignupStack')}>Sign Up</Text>
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
    padding:20,
  },
  ImageBackground:{
    display:'flex',
    flexDirection:'column',
    width:435,
    height:260,
    position:'relative',
    marginLeft:40,
    marginTop:-10,
  },
  arrow: {
    width:42,
    height:30,  
    position:'absolute',
    marginLeft:-150,
    marginTop:-310,
  },
  logo: {
    width: 243.22,
    height: 159,
    position:'absolute',
    marginLeft:-120,
    marginTop:-160,
  },
  inputtext:{
    fontSize:16,
    alignSelf:'flex-start'
  },
  inputflex:{
    display:'flex',
    flexDirection:'row',
    marginBottom:10,
    marginLeft:5,
  },
  inputimage:{
    width:11,
    height:22,
    alignSelf:'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft:5,
    paddingLeft: 10,
    color: '#333',
  },
  boxforgotPassword:{
    justifyContent:'flex-end',
    alignSelf:'flex-end',
  },
  forgotPassword: {
    marginTop:-10,
    color: '#0C2A92',
    fontSize:10,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor:'#679400',
    width: '193',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    
  },
  loginText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ImageBackground1:{
    position:'relative',
    width:435,
    height:260,
    marginBottom:-15,
  },
  signupText: {
    color: '#777',
    position:'absolute',
    marginLeft:-100,
    marginTop:-80,
  },
});

export default LoginScreen;
