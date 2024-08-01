import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66ab40ac636a4840d7c9e06f.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = axios.get("/contacts");
      return (await response).data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = axios.post("/contacts", newContact);
      return (await response).data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = axios.delete(`/contacts/${contactId}`);
      return (await response).data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
