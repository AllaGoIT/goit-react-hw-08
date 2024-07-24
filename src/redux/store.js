import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReduser } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactSlice.js";
import { filterReducer } from "./filterSlice.js";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// const persistConfig = {
//   key: "root", // balance
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const persistor = persistStore(store);

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
