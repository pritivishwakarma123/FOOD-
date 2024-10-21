import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.get('http://localhost:3000/users')
      .then(response => {
        const users = response.data;
        const user = users.find(user => user.username === formData.username && user.password === formData.password);
  
        if (user) {
          console.log('Login successful:', user);
          navigate('/home');
        } else {
          console.error('Login failed: Invalid username or password');
          alert('Invalid username or password. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        alert('Error fetching users. Please try again.');
      });
  };
    
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-link1">
          <p>Don't have an account yet?</p> <Link to="/signup">Sign Up Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;