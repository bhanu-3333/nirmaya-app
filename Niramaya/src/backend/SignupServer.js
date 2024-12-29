 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SignupServer = express();
const PORT = 5000;

// Middleware
SignupServer.use(cors());
SignupServer.use(bodyParser.json());

// Connect to MongoDB (Use your own database URI)
mongoose.connect('mongodb://localhost:27017/niramaya', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// User Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Signup Route
SignupServer.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user to the database
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json({ message: 'User created successfully' });
});

// Login Route
SignupServer.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user by email or username
  const user = await User.findOne({ email: username });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Compare password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  // Create a token
  const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

  res.status(200).json({ message: 'Login successful', token });
});

// Start the server
SignupServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 const handleSignup = async () => {
  if (!name || !email || !password || !isSelected) {
    Alert.alert("Error", "Please fill in all fields and accept the terms and conditions.");
    return;
  }

  const userData = {
    name,
    email,
    password,
  };

  try {
    const response = await axios.post('http://localhost:6000/signup', userData);
    if (response.data.message === 'User created successfully') {
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Home'); // Navigate to Home page after signup
    } else {
      Alert.alert('Error', response.data.message);
    }
  } catch (error) {
    Alert.alert('Error', 'There was an error creating your account. Please try again later.');
    console.error(error);
  }
};