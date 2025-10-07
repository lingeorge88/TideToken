
import axios from 'axios';
const DEPLOYED='https://tidetoken-spring.onrender.com'
const LOCALHOST='http://localhost:5454'

export const API_BASE_URL = window.location.hostname === 'localhost' ? LOCALHOST : DEPLOYED

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token dynamically on each request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
