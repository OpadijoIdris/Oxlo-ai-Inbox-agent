import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

if (process.env.NODE_ENV === 'production' && baseURL.includes('localhost')) {
  console.warn('WARNING: Frontend is using localhost API URL in production mode.');
}

const api = axios.create({
  baseURL,
});

// Add a request interceptor to include the token in all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('inboxpilot_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
