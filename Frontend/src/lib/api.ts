import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api',
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
