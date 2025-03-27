import axios from 'axios';
import callApi from './callApi';
import { useAuthStore } from '@/store/useAuthStore';

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': import.meta.env.VITE_API_KEY,
  },
});

export const publicInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': import.meta.env.VITE_API_KEY,
  },
});

authInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { logout } = useAuthStore.getState();

    if (error.response?.status === 401 && !error.config.__isRetryRequest) {
      try {
        await callApi.refreshToken();
        error.config.__isRetryRequest = true;
        return authInstance(error.config);
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
