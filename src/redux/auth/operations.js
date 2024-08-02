import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const login = createAsyncThunk(
  "/users/login",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", newUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/users/logout", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/users/current");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.massage);
  }
});
