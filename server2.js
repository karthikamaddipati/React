const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secretKey = 'your-secret-key';

app.use(express.json());

// Database simulation (temporary array to store users)
const users = [];

// Register a new user
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  if (users.some(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Generate a salt and hash the password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      // Create a new user object
      const newUser = { username, password: hash };
      users.push(newUser);
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find(user => user.username === username);

  // User not found
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Compare the password hash
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!result) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  });
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token missing' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Access denied. Invalid token' });
    }

    req.user = decoded;
    next();
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
