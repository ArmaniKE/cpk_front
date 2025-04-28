import axios from "axios";
import store from "../state/store";
import { setToken, setUser, clearToken } from "../state/slices/authSlice";

// const API_URL = "http://localhost:8000/auth/";
const API_URL = "backend:8000/auth/";


const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token;
  if (token) {
    // console.log("Adding token to request:", token);
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export const register = async (userData) => {
  try {
    // console.log("Регистрация:", userData);
    if (!userData.username || !userData.password) {
      throw new Error("Отсутствуют обязательные поля");
    }
    const response = await api.post("register", userData);
    // console.log("Регистрация успешна:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка:", error.message);
    throw error;
  }
};

export const login = async (userData, dispatch) => {
  try {
    if (!userData.username || !userData.password) {
      throw new Error("Отсутствуют обязательные поля");
    }
    // console.log("Попытка входа в систему...");
    const response = await api.post("login", userData);
    if (response.data.token) {
      dispatch(setToken(response.data.token));
      // console.log("Login successful, fetching user data...");
      await fetchUser(dispatch);
      return response.data;
    } else {
      throw new Error("Токен не получен");
    }
  } catch (error) {
    console.error("Ошибка:", error.message);
    throw error;
  }
};

export const fetchUser = async (dispatch) => {
  try {
    const response = await api.get("user");
    if (response.data) {
      dispatch(setUser(response.data));
      // console.log("User data fetched successfully:", response.data);
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    if (error.response && error.response.status === 401) {
      // console.log("Unauthorized: Logging out...");
      dispatch(clearToken());
    }
    throw error;
  }
};

export default api;
