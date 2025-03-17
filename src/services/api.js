import axios from "axios";

const API_URL = "http://localhost:8000/auth/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
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
    console.log("Регистрация успешна:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка:", error.message);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    if (!userData.username || !userData.password) {
      throw new Error("Отсутствуют обязательные поля");
    }
    // console.log("Попытка входа в систему...");
    const response = await api.post("login", userData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      // if (response.data.user) {
      //   localStorage.setItem("user", JSON.stringify(response.data.user));
      // }
      console.log("Вход выполнен успешно!");
      return response.data;
    } else {
      throw new Error("Токен не получен");
    }
  } catch (error) {
    console.error("Ошибка:", error.message);
    throw error;
  }
};

// export const logout = () => {
//   localStorage.removeItem("token");
//   return api.post("logout");
// };

// export const getUser = () => api.get("user");

export default api;