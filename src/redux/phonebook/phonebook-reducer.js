import { createReducer } from "@reduxjs/toolkit";
// import { addNewContact, deleteContact, handleFilter } from './phonebook-actions';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  handleFilter,
} from "./phonebook-actions";
// import types from './phonebook-types';

// const initialState = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ];



export const contacts = createReducer([], {
  [getContactsSuccess]: (_, {payload}) => payload,
  [addContactSuccess]: (state, action) => {
    return [...state, ...action.payload];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
  
export const loading = createReducer(false, {
  [getContactsRequest]: (_, action) => true,
  [getContactsSuccess]: (_, action) => false,
  [getContactsError]: (_, action) => false,
  [addContactRequest]: (_, action) => true,
  [addContactSuccess]: (_, action) => false,
  [addContactError]: (_, action) => false,
  [deleteContactRequest]: (_, action) => true,
  [deleteContactSuccess]: (_, action) => false,
  [deleteContactError]: (_, action) => false,
});

  
export const error = createReducer(null, {
  [getContactsError]: (_, action) => action.payload,
  [addContactError]: (_, action) => action.payload,
  [deleteContactError]: (_, action) => action.payload,
  
});

export const filterReducer = createReducer('', {
  [handleFilter]: (_, { payload }) => payload,
});









///////////////////////////////////

// const initialState = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ];


// export const contactsReducer = createReducer(initialState, {
// [addNewContact]: (state, { payload }) => [...state, payload],
// [deleteContact]: (state, { payload }) =>
// state.filter(contact => contact.id !== payload),
// });



// export const filterReducer = createReducer('', {
//   [handleFilter]: (_, { payload }) => payload,
// });


// const contactsReducer = (state = initialState, { type, payload }) => {
//    switch (type) {
//      case types.ADD:
//       return [...state, payload];
     
     
//      case types.DELETE:
//        return state.filter((el) => el.id !== payload.id);
     
//      default:
//        return state;
//    }
//  }
  
// const filterReducer = (state = '', {type, payload}) => {
//     switch (type) {
//       case types.HANDLE_FILTER:
//         return payload;
//      default:
//        return state;
//    }
// }

