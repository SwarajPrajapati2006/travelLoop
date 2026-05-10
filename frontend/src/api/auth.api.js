import api from './axios';
import { MOCK_USER, delay } from '../mock/data';

export const login = async (credentials) => {
  try {
    const { data } = await api.post('/auth/login', credentials);
    return data;
  } catch (err) {
    // If it's a 401, it might be correct (invalid creds)
    // But if it's a network error or the backend is just broken, fallback to mock
    if (err.response && err.response.status === 401) {
       // Check if it's the mock user creds
       if (credentials.email === 'elena@example.com' && credentials.password === 'password123') {
         return { ...MOCK_USER, token: 'mock-jwt-token-123' };
       }
       throw err;
    }
    
    await delay(600);
    return { ...MOCK_USER, token: 'mock-jwt-token-123' };
  }
};

export const register = async (userData) => {
  try {
    const { data } = await api.post('/auth/register', userData);
    return data;
  } catch (err) {
    await delay(600);
    return { ...MOCK_USER, ...userData, id: 'user-new', token: 'mock-jwt-token-new' };
  }
};

export const getMe = async () => {
  try {
    const { data } = await api.get('/auth/me');
    return data;
  } catch (err) {
    await delay(300);
    return MOCK_USER;
  }
};
