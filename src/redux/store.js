import { configureStore } from "@reduxjs/toolkit";
const initionalState = 5;
const rootReducer = (state = initionalState, action) => {
  return state;
};
export const store = configureStore({
  reducer: rootReducer,
});
