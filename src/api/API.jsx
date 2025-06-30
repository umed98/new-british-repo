import axios from 'axios';

const API = axios.create({
  baseURL: 'https://britishquilting.fastranking.cloud', // Replace with your actual base URL
  timeout: 10000, // optional: request timeout in ms
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;