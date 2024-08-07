export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsRegistration = (state) => state.auth.token;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
