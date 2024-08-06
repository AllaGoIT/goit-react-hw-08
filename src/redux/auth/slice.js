import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refresh } from "./operations";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        // state.user = true;
        state.token = true;
      })

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(register.rejected, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })

      .addCase(login.pending, (state) => {
        // state.user = true;
        state.token = true;
        state.isLoggedIn = true;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(login.rejected, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })

      .addCase(logout.pending, (state) => {
        // state.user = true;
        state.token = true;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(logout.rejected, (state) => {
        // state.user = true;
        state.isLoggedIn = true;
      })

      .addCase(refresh.pending, (state) => {
        state.token = true;
        state.isRefreshing = true;
      })

      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = true;
      })

      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
        state.token = false;
      });
  },
});

export const authReducer = authSlice.reducer;
