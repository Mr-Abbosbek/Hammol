import axios from 'axios';
const baseURL = 'http://localhost:3001/api'; 

const service = axios.create({
  baseURL,
});

service.interceptors.request.use((config) => {
  return config;
});

export { service };