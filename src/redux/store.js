import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactsSlice.js";
import { filterReducer } from "./filtersSlice.js";

// export const deleteContact = (contactId) => {
//   return {
//     type: "contacts/deleteContacts",
//     payload: "contactId",
//   };
// };

//     return prevContacts.filter((contact) => contact.id !== contactId)

//   }))
// };

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};
const persistContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
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
