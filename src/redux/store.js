import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactSlice.js";
import { filterReducer } from "./filterSlice.js";

const persistConfig = {
  key: "contacts", // balance
  storage,
};
const persistContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);

// const initionalState = {
//   contacts: {
//     items: [],
//   },
// };
// const rootReducer = (state = initionalState, action) => {
//   switch (action.type) {
//     case "type action dispatch": {
//       return {
//         contacts: {
//           items: state.contacts + action.payload, // from dispatch actions
//         },
//       };
//     }
//     default:
//       return state;
//   }
// };
