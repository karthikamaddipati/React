import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Fetch all blogs from the backend API
  useEffect(() => {
    axios.get('/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.log(error));
  }, []);

  // Add a new blog
  const addBlog = () => {
    axios.post('/blogs', { title, content })
      .then(response => {
        setBlogs([...blogs, response.data]);
        setTitle('');
        setContent('');
      })
      .catch(error => console.log(error));
  };

  // Delete a blog by ID
  const deleteBlog = (id) => {
    axios.delete(`/blogs/${id}`)
      .then(() => setBlogs(blogs.filter(blog => blog.id !== id)))
      .catch(error => console.log(error));
  };

  // Update a blog by ID
  const updateBlog = (id, updatedTitle, updatedContent) => {
    axios.put(`/blogs/${id}`, { title: updatedTitle, content: updatedContent })
      .then(response => {
        setBlogs(blogs.map(blog => (blog.id === id ? response.data : blog)));
      })
      .catch(error => console.log(error));
  };

  // Replace a blog by ID
  const replaceBlog = (id, updatedTitle, updatedContent) => {
    axios.patch(`/blogs/${id}`, { title: updatedTitle, content: updatedContent })
      .then(response => {
        setBlogs(blogs.map(blog => (blog.id === id ? response.data : blog)));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>My Blog App</h1>
      <form onSubmit={addBlog}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit">Add Blog</button>
      </form>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
            <button onClick={() => updateBlog(blog.id, 'Updated Title', 'Updated Content')}>Update</button>
            <button onClick={() => replaceBlog(blog.id, 'Replaced Title', 'Replaced Content')}>Replace</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
