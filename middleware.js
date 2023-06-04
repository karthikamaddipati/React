const express = require('express');
const app = express();

const authMiddleware = require('./authMiddleware');

// Example route with authentication middleware
app.get('/posts', authMiddleware, (req, res) => {
  // Assuming authentication was successful, you can access the user data from req.user
  const user = req.user;

  // Fetch and send post data based on the authenticated user
  // ...

  res.json({ message: 'Posts retrieved successfully', data: posts });
});

// Other routes and server configuration...

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
