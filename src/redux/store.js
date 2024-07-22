import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReduser } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // balance
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistor = persistStore(store);

// const initionalState = {
//   balance: {
//     value: 0,
//   },
// };
// const rootReducer = (state = initionalState, action) => {
//   switch (action.type) {

//     case "type action dispatch": {
//       return {
//         balance: {
//           value: state.balance.value + action.payload // from dispatch actions
//         }
//     }
//       }
//     }
//     default:
//       return state;
//   }
// };
export const store = configureStore({
  reducer, //balance: persistedReducer,
});
