const express = require('express');
const app = express();

// Simulated array of posts
const posts = [
  { id: 1, title: 'Post 1', content: 'Content of post 1' },
  { id: 2, title: 'Post 2', content: 'Content of post 2' },
  // Add more posts here...
];

// Endpoint to retrieve posts
app.get('/posts', (req, res) => {
  res.json({ posts });
});

// Server configuration
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
