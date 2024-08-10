import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from '../contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContactThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteContactThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = slice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
