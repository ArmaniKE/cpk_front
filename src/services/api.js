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

export const register = (userData) => {
  console.log("Registering user:", userData);
  return api.post("register", userData);
};

export const login = async (userData) => {
  try {
    console.log("Logging in user:", userData);
    const response = await api.post("login", userData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token); // Store token
      console.log("Login successful, token stored!");
      // console.log(response.data.token);
    } else {
      console.error("Login failed: No token received");
    }
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

// export const logout = () => {
//   localStorage.removeItem("token");
//   return api.post("logout");
// };

export const getUser = () => api.get("user");
export default api;