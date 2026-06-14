import axios from 'axios';

const API = axios.create({
  baseURL: '/smartparking_report',
  withCredentials: true, // Crucial for session cookies
});

export default API;
