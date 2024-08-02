import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
},
    extraReducers: (builder) => builder.addCase(()=>{}),
});

export default authSlice.reducer;