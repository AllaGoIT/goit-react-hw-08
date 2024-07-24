import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initionalState: {
    contacts: {
      items: [],
    },
  },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (el) => [el.id]("http://el.id/") !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
