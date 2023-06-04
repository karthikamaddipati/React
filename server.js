const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Blog data (temporary array to store blogs)
let blogs = [];

// Get all blogs
app.get('/blogs', (req, res) => {
  res.json(blogs);
});

// Add a new blog
app.post('/blogs', (req, res) => {
  const { title, content } = req.body;
  const newBlog = { id: blogs.length + 1, title, content };
  blogs.push(newBlog);
  res.json(newBlog);
});

// Delete a blog
app.delete('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  blogs = blogs.filter(blog => blog.id !== id);
  res.sendStatus(204);
});

// Update a blog
app.put('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const updatedBlog = { id, title, content };
  blogs = blogs.map(blog => (blog.id === id ? updatedBlog : blog));
  res.json(updatedBlog);
});

// Replace a blog
app.patch('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const updatedBlog = { id, title, content };
  const index = blogs.findIndex(blog => blog.id === id);
  blogs.splice(index, 1, updatedBlog);
  res.json(updatedBlog);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
