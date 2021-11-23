// import types from './phonebook-types';

import { createAction } from "@reduxjs/toolkit";

//getcontacts
// pending
export const getContactsRequest = createAction('getContacts/Request');
//resolved
export const getContactsSuccess = createAction('getContacts/Success');
// rejected
export const getContactsError = createAction('getContacts/Error');

//addContact
// pending
export const addContactRequest = createAction('addContact/Request');
//resolved
export const addContactSuccess = createAction('addContact/Success');
// rejected
export const addContactError = createAction('addContact/Error');

//deleteContact
// pending
export const deleteContactRequest = createAction('deleteContact/Request');
//resolved
export const deleteContactSuccess = createAction('deleteContact/Success');
// rejected
export const deleteContactError = createAction('deleteContact/Error');


export const handleFilter = createAction('phonebook/handleFilter');


//hooks
// export const addNewContact = createAction('phonebook/add');
// export const deleteContact = createAction('phonebook/delete');
// export const handleFilter = createAction('phonebook/handleFilter');

//vanilla js
// const addNewContact = (contact) => ({
//     type: types.ADD,
//     payload: contact,
// })

// const deleteContact = (id) => ({
//     type: types.DELETE,
//     payload: id,
// })

// const handleFilter = value => ({
//     type: types.HANDLE_FILTER,
//     payload: value,
// })

