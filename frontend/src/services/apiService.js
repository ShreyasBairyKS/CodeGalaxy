// src/services/apiService.js
import axios from 'axios';
import API_BASE_URL from '../config.js';

// Example function to fetch user data
export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`);
    return response.data; // Return user data
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to fetch user data');
  }
};

// Example function to fetch snippets
export const fetchSnippets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/snippet`);
    return response.data; // Return snippets data
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to fetch snippets');
  }
};
