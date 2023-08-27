
import axios from 'axios';

const API_BASE_URL = 'https://a.techcarrel.in/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const setAuthorizationHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return !!token;
};

const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('authToken');
  setAuthorizationHeader(null);
};

const AuthService = {
  isAuthenticated: isAuthenticated,
  login: login,
  logout: logout,
};

export default AuthService;
