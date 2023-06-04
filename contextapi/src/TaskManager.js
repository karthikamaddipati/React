import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Make a POST request to authenticate the user
      const response = await axios.post('https://reqres.in/api/login', {
        email: 'user@example.com',
        password: 'password',
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={
        isLoggedIn ? (
          <Component />
        ) : (
          navigate('/login')
        )
      }
    />
  );

  const TaskDashboard = () => <h2>Task Dashboard</h2>;

  const Login = () => (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );

  return (
    <Router>
      <div className="App">
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/dashboard" component={TaskDashboard} />
      </div>
    </Router>
  );
};

export default App;
