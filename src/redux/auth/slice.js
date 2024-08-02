import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refresh } from "./operations";
const authSlice = createSlice({
  name: "users",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
      builder.addCase((register.pending, (state) => {
          state.user.name = true;
          state.user.email = true;
          state.token = true;
      })).addCase((register.fulfilled, (state) => {
          state.token = true;
      })).addCase((register.rejected, (state) => {
          state.user.name = null;
          state.user.email = null;
          state.token = null,
          state.isLoggedIn= false,
          state.isRefreshing= false,

    })).addCase((login.pending, (state) => {
          state.user.name = true;
          state.user.email = true;
          state.token = true;
    })).addCase((login.fulfilled, (state) => {
           state.token = true;
          state.isLoggedIn = true;
    })).addCase((login.rejected, (state) => {
        state.user.name = null;
          state.user.email = null;
          state.token = null,
          state.isLoggedIn= false,
          state.isRefreshing= false,

    }))
});

export default authSlice.reducer;
