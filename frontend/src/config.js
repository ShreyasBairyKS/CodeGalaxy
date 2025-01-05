// config.js
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://codegalaxy.onrender.com/api' // Your deployed backend URL
  : 'http://localhost:5000/api'; // Local backend URL for development

export default API_BASE_URL;
