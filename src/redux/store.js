import { configureStore } from "@reduxjs/toolkit";
const initionalState = {
  balance: {
    value: 0,
  },
};
const rootReducer = (state = initionalState, action) => {
  switch (action.type) {

    case "type action dispatch": {
      return {
        balance: {
          value: state.balance.value + action.payload // from dispatch actions
        }
    }
      } 
    }
    default:
      return state;
  }
};
export const store = configureStore({
  reducer: rootReducer,
});
