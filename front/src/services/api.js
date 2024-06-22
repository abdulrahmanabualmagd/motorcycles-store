import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://your-api-base-url.com',
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
