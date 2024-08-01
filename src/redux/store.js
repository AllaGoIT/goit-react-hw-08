// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// // } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { contactsReducer } from "./contactsSlice.js";
// import { filterReducer } from "./filtersSlice.js";

// const persistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"],
// };
// const persistContactsReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistContactsReducer,
//     filters: filterReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
