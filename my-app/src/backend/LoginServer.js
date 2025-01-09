const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const LoginServer = express();
const port = 5000;

LoginServer.use(cors());  // Allow cross-origin requests from your React Native app
LoginServer.use(bodyParser.json()); // Parse JSON bodies

// In-memory user data (you would typically use a database)
const users = [
  {
    username: 'testuser',
    password: 'password123', // Password should be hashed in real applications
  },
];

// Login endpoint
LoginServer.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists and password matches
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    return res.json({ message: 'Login successful', user });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
LoginServer.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});