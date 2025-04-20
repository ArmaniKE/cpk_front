import { createSlice } from "@reduxjs/toolkit";
import { saveToken, removeToken, getToken } from "../../utils/storage";

const initialState = {
  token: getToken() || null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log("setToken action dispatched with payload:", action.payload);
      state.token = action.payload;
      saveToken(action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;
      removeToken();
    },
    setUser: (state, action) => {
      console.log("setUser action dispatched with payload:", action.payload);
      state.user = action.payload;
    },
  },
});

export const { setToken, clearToken, setUser } = authSlice.actions;

export default authSlice.reducer;
