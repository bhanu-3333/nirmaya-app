import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import { Checkbox } from 'react-native-paper'; 
import { CheckBox } from 'react-native-web';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo Image */}
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
      

      {/* Name Input */}
      <Text style={styles.inputtext}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <Text style={styles.inputtext}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <Text style={styles.inputtext}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      {/* Terms & Conditions Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={isSelected ? 'checked' : 'unchecked'}
          onPress={() => setSelection(!isSelected)}
        />
        <Text style={styles.label}>I agree to the <Text style={styles.link}>terms & policy</Text></Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      {/* OR Section */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      {/* Social Login Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
          <Image source={require('../assets/image/googlelogo.png')} style={styles.icons}></Image>
          <Text style={styles.socialButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
          <Image source={require('../assets/image/applelogo.png')} style={styles.icons}></Image>
          <Text style={styles.socialButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Navigation */}
      <View>
        <ImageBackground source={require('../assets/image/bg2.png')} style={styles.ImageBackground1}></ImageBackground>    
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('LoginStack')} style={styles.subsignInText}>
        <Text style={styles.signInText}>Have an account? <Text style={styles.changeText}> Sign In </Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  ImageBackground:{
    display:'flex',
    flexDirection:'column',
    width:435,
    height:250,
    position:'relative',
    marginTop:-9,
    marginLeft:-15,
  },
  
  arrow: {
    width:42,
    height:30,  
    position:'absolute',
    marginTop:20,
  },
  logo: {
    width: 200,  // Adjust the size of the logo
    height: 100,
    marginBottom: 20,
    position:'absolute',
    marginLeft:72,
    marginTop:-130,
  },
  inputtext:{
    fontSize:12,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize:12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
    fontSize:8.73,
  },
  link: {
    color: '#2e64e5',
  },
  button: {
    backgroundColor: '#679400',
    padding: 10,
    borderRadius: 20,
    justifyContent:'center',
    alignSelf: 'center',
    marginBottom: 25,
    marginTop:-7,
    width:200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:'center',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position:'relative',
    marginTop:10,
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: 'black',
  },
  Checkbox:{
    height:2,
    width:8,
  },
  orText: {
    marginHorizontal: 10,
    color: 'black',
    fontSize:10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop:5,
  },
  socialButton: {
    padding: 2,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    display:'flex',
    flexDirection:'row',
    width:150,
  },
  icons:{
    width:23.8,
    height:23.8,
  },
  socialButtonText: {
    color: '#000',
    fontSize:10,
    marginLeft:8,
  },
  ImageBackground1:{
    position:'absolute',
    width:435,
    height:260,
    marginTop:-149,
    marginLeft:-70,
  },
  signInText: {
    color: 'black',
    position:'absolute',
    marginLeft:80,
    marginTop:50,
  },
  changeText:{
    color: '#2e64e5',
  }
});

export default SignupScreen;
