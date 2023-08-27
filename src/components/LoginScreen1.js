import React, { useState } from 'react';
import './LoginScreen1.css';
import AuthService from '../services/AuthService';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Simulate login API call
      const response = await AuthService.login(email, password);
  
      if (response.success) {
        onLogin();
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default LoginScreen;
